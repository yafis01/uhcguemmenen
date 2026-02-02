import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
    title: string;
    description: string;
    url?: string;
    image?: string;
    index?: boolean;
    structuredData?: object;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    private readonly siteName = 'Gümmenen Sport-Club';
    private readonly defaultImage = 'https://www.guemmenen-sport-club.ch/assets/00_GSC/original_logo.PNG';

    constructor(
        private titleService: Title,
        private meta: Meta,
        @Inject(DOCUMENT) private document: Document
    ) {}

    setSEO(config: SeoConfig): void {
        const fullTitle = `${config.title} | ${this.siteName}`;

        // 🔹 Title
        this.titleService.setTitle(fullTitle);

        // 🔹 Basic Meta
        this.setMeta('description', config.description);
        this.setMeta('robots', config.index === false ? 'noindex,nofollow' : 'index,follow');

        // 🔹 Canonical
        if (config.url) {
            this.setCanonical(config.url);
        }

        // 🔹 Open Graph
        this.setProperty('og:title', fullTitle);
        this.setProperty('og:description', config.description);
        this.setProperty('og:type', 'website');
        this.setProperty('og:url', config.url || '');
        this.setProperty('og:image', config.image || this.defaultImage);
        this.setProperty('og:site_name', this.siteName);

        // 🔹 Structured Data
        if (config.structuredData) {
            this.setStructuredData(config.structuredData);
        }
    }

    // ---------- Helpers ----------

    private setMeta(name: string, content: string): void {
        this.meta.updateTag({ name, content });
    }

    private setProperty(property: string, content: string): void {
        this.meta.updateTag({ property, content });
    }

    private setCanonical(url: string): void {
        let link: HTMLLinkElement | null =
            this.document.querySelector("link[rel='canonical']");

        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }

        link.setAttribute('href', url);
    }

    private setStructuredData(data: object): void {
        const scriptId = 'structured-data';

        let script = this.document.getElementById(scriptId);
        if (script) {
            script.remove();
        }

        script = this.document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', scriptId);
        script.textContent = JSON.stringify(data);

        this.document.head.appendChild(script);
    }
}
