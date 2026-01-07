import gsap from "gsap";

interface TypingAnimationOptions {
  element: HTMLElement;
  text: string | string[]; // Support single string or array for multiple phrases
  typeSpeed?: number; // Base speed per character (seconds)
  deleteSpeed?: number; // Base speed per character (seconds)
  pauseAfterType?: number; // Pause after typing complete (seconds)
  pauseAfterDelete?: number; // Pause after deleting complete (seconds)
  cursor?: boolean; // Show blinking cursor
  cursorChar?: string; // Cursor character
  cursorBlinkSpeed?: number; // Cursor blink speed (seconds)
  naturalTyping?: boolean; // Add natural variation to typing speed
  deleteMode?: "full" | "smart"; // full: delete all, smart: delete to common prefix
  loop?: boolean; // Loop animation
  onComplete?: () => void; // Callback when animation completes
  onTypeComplete?: (text: string) => void; // Callback when typing a phrase completes
  startDelay?: number; // Initial delay before starting
}

export class TypingAnimation {
  private element: HTMLElement;
  private texts: string[];
  private options: Required<TypingAnimationOptions>;
  private timeline: gsap.core.Timeline;
  private cursorElement?: HTMLElement;
  private currentTextIndex = 0;
  private isDestroyed = false;

  constructor(options: TypingAnimationOptions) {
    this.element = options.element;
    this.texts = Array.isArray(options.text) ? options.text : [options.text];

    // Set defaults
    this.options = {
      element: options.element,
      text: options.text,
      typeSpeed: options.typeSpeed ?? 0.08,
      deleteSpeed: options.deleteSpeed ?? 0.05,
      pauseAfterType: options.pauseAfterType ?? 1.5,
      pauseAfterDelete: options.pauseAfterDelete ?? 0.5,
      cursor: options.cursor ?? true,
      cursorChar: options.cursorChar ?? "|",
      cursorBlinkSpeed: options.cursorBlinkSpeed ?? 0.5,
      naturalTyping: options.naturalTyping ?? true,
      deleteMode: options.deleteMode ?? "smart",
      loop: options.loop ?? true,
      onComplete: options.onComplete ?? (() => {}),
      onTypeComplete: options.onTypeComplete ?? (() => {}),
      startDelay: options.startDelay ?? 0.5,
    };

    // Setup cursor
    if (this.options.cursor) {
      this.setupCursor();
    }

    // Create timeline
    this.timeline = gsap.timeline({
      repeat: this.options.loop ? -1 : 0,
      onComplete: () => {
        if (!this.options.loop) {
          this.options.onComplete();
        }
      },
    });

    this.buildAnimation();
  }

  private setupCursor() {
    // Create cursor element
    this.cursorElement = document.createElement("span");
    this.cursorElement.className = "typing-cursor";
    this.cursorElement.textContent = this.options.cursorChar;
    this.cursorElement.style.display = "inline-block";

    // Insert cursor after text element
    if (this.element.nextSibling) {
      this.element.parentNode?.insertBefore(
        this.cursorElement,
        this.element.nextSibling
      );
    } else {
      this.element.parentNode?.appendChild(this.cursorElement);
    }

    // Animate cursor blinking
    gsap.to(this.cursorElement, {
      opacity: 0,
      duration: this.options.cursorBlinkSpeed,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
    });
  }

  private getTypingSpeed(): number {
    if (!this.options.naturalTyping) {
      return this.options.typeSpeed;
    }

    // Add natural variation (±30%)
    const variation = 0.3;
    const min = this.options.typeSpeed * (1 - variation);
    const max = this.options.typeSpeed * (1 + variation);
    return gsap.utils.random(min, max);
  }

  private findCommonPrefix(str1: string, str2: string): number {
    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
      i++;
    }
    return i;
  }

  private buildAnimation() {
    const tl = this.timeline;

    // Initial delay
    if (this.options.startDelay > 0) {
      tl.to({}, { duration: this.options.startDelay });
    }

    this.texts.forEach((text, textIndex) => {
      const chars = text.split("");
      const previousText = textIndex > 0 ? this.texts[textIndex - 1] : "";

      // Determine starting point based on delete mode
      let startIndex = 0;
      if (textIndex > 0 && this.options.deleteMode === "smart") {
        startIndex = this.findCommonPrefix(previousText, text);
      }

      // Type characters with natural speed variation
      chars.forEach((char, i) => {
        if (i < startIndex) return; // Skip common prefix

        tl.to(
          this.element,
          {
            textContent: chars.slice(0, i + 1).join(""),
            duration: this.getTypingSpeed(),
            ease: "none",
            onComplete: () => {
              // Add extra pause after punctuation for natural feel
              if (this.options.naturalTyping && /[.,!?;:]/.test(char)) {
                tl.to({}, { duration: 0.15 });
              }
            },
          },
          i === startIndex ? "+=0" : `+=${this.getTypingSpeed() * 0.1}`
        );
      });

      // Pause after typing complete
      tl.to({}, { duration: this.options.pauseAfterType });

      // Callback when typing completes
      tl.call(() => {
        this.options.onTypeComplete(text);
      });

      // Delete characters (if not the last text or if looping)
      const shouldDelete =
        textIndex < this.texts.length - 1 || this.options.loop;

      if (shouldDelete) {
        const nextText = this.texts[(textIndex + 1) % this.texts.length];
        let deleteToIndex = 0;

        if (this.options.deleteMode === "smart") {
          deleteToIndex = this.findCommonPrefix(text, nextText);
        }

        // Delete with slight speed variation
        for (let i = chars.length - 1; i >= deleteToIndex; i--) {
          tl.to(this.element, {
            textContent: chars.slice(0, i).join(""),
            duration: this.options.naturalTyping
              ? gsap.utils.random(
                  this.options.deleteSpeed * 0.8,
                  this.options.deleteSpeed * 1.2
                )
              : this.options.deleteSpeed,
            ease: "none",
          });
        }

        // Pause before typing next text
        tl.to({}, { duration: this.options.pauseAfterDelete });
      }
    });
  }

  // Public methods for control
  play() {
    this.timeline.play();
    return this;
  }

  pause() {
    this.timeline.pause();
    return this;
  }

  restart() {
    this.timeline.restart();
    return this;
  }

  destroy() {
    if (this.isDestroyed) return;

    this.timeline.kill();
    if (this.cursorElement) {
      gsap.killTweensOf(this.cursorElement);
      this.cursorElement.remove();
    }
    this.element.textContent = "";
    this.isDestroyed = true;
  }

  // Update texts dynamically
  updateTexts(newTexts: string | string[]) {
    const wasPlaying = !this.timeline.paused();
    this.timeline.kill();

    this.texts = Array.isArray(newTexts) ? newTexts : [newTexts];
    this.timeline = gsap.timeline({
      repeat: this.options.loop ? -1 : 0,
      paused: !wasPlaying,
    });

    this.buildAnimation();
    return this;
  }

  // Get current state
  isPlaying(): boolean {
    return !this.timeline.paused();
  }

  getProgress(): number {
    return this.timeline.progress();
  }
}

// Convenience function for simple use cases
export function createTypingAnimation(
  options: TypingAnimationOptions
): TypingAnimation {
  return new TypingAnimation(options);
}

// Additional utility: Type writer effect for static text (one-time)
export function typeWriterEffect(
  element: HTMLElement,
  text: string,
  options: Partial<TypingAnimationOptions> = {}
): gsap.core.Timeline {
  const {
    typeSpeed = 0.08,
    naturalTyping = true,
    cursor = false,
    startDelay = 0,
  } = options;

  const chars = text.split("");
  const tl = gsap.timeline();

  if (startDelay > 0) {
    tl.to({}, { duration: startDelay });
  }

  let cursorEl: HTMLElement | undefined;

  if (cursor) {
    cursorEl = document.createElement("span");
    cursorEl.textContent = "|";
    cursorEl.style.display = "inline-block";
    if (element.nextSibling) {
      element.parentNode?.insertBefore(cursorEl, element.nextSibling);
    } else {
      element.parentNode?.appendChild(cursorEl);
    }

    gsap.to(cursorEl, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
    });
  }

  chars.forEach((char, i) => {
    const duration = naturalTyping
      ? gsap.utils.random(typeSpeed * 0.7, typeSpeed * 1.3)
      : typeSpeed;

    tl.to(element, {
      textContent: chars.slice(0, i + 1).join(""),
      duration,
      ease: "none",
      onComplete: () => {
        if (naturalTyping && /[.,!?;:]/.test(char)) {
          tl.to({}, { duration: 0.15 });
        }
      },
    });
  });

  // Remove cursor after completion if added
  if (cursorEl) {
    tl.call(() => {
      gsap.killTweensOf(cursorEl);
      cursorEl?.remove();
    });
  }

  return tl;
}
