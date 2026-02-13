import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {SeoService} from "../../shared/seo/seo.service";

interface NewsItem {
    id: number;
    title: string;
    date: string;
    summary: string;
    image: string;
    link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    news: NewsItem[] = [
        {
            id: 1,
            title: 'Grümpelturnier 25. April 2026',
            date: '25.04.2026',
            summary: 'Am 25. April 2026 findet das erste Unihockey-Grümpelturnier des Gümmenen Sport-Club statt. Sei dabei!',
            image: '../../../assets/00_GSC/grumpu_logo_transparent.png',
            link: '/events'
        }
    ];

    constructor(private seo: SeoService) {}

    ngOnInit(): void {
        this.seo.setSEO({
            title: 'Gümmenen Sport-Club aus Gümmenen im Kanton Bern',
            description: 'Der Gümmenen Sport-Club ist ein regionaler Sport-Club aus Gümmenen im Kanton Bern. Infos zu Teams, Events und Vereinsleben.',
            url: 'https://www.guemmenen-sport-club.ch/',
            structuredData: {
                "@context": "https://schema.org",
                "@type": "SportsClub",
                "name": "Gümmenen Sport-Club",
                "sport": ["Fussball", "Unihockey", "TV", "Turnverein"],
                "address": {
                    "@type": "3205 Gümmenen",
                    "addressLocality": "Gümmenen",
                    "addressRegion": "BE",
                    "addressCountry": "CH"
                },
                "url": "https://www.guemmenen-sport-club.ch/"
            }
        });
    }
}
