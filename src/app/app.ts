import { Component, signal } from '@angular/core';

type PortfolioVideo = {
  title: string;
  src: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('porfatolio_sergio');
  protected readonly linkedinUrl = 'https://co.linkedin.com/in/sergio-sanchez-204097266';
  protected readonly whatsappUrl = 'https://wa.me/573244623651';
  protected readonly instagramUrl = 'https://www.instagram.com/sergiosanchez851?igsh=MTRlNjd5ODVrcjg3NA%3D%3D';
  protected readonly videos: PortfolioVideo[] = [
    { title: 'Coordinadora.mp4', src: '/videos/Coordinadora.mp4' },
    { title: 'Corvette.mp4', src: '/videos/Corvette.mp4' },
    { title: 'Full motion.mp4', src: '/videos/Full motion.mp4' },
    { title: 'Pro video full.mp4', src: '/videos/Pro video full.mp4' },
    { title: 'Video WC.mp4', src: '/videos/Video WC.mp4' },
    { title: 'Videoluisito.mp4', src: '/videos/Videoluisito.mp4' }
  ];

  protected readonly selectedVideo = signal<PortfolioVideo | null>(null);

  protected openVideo(video: PortfolioVideo): void {
    this.selectedVideo.set(video);
  }

  protected closeVideo(): void {
    this.selectedVideo.set(null);
  }
}
