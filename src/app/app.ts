import { Component, signal } from '@angular/core';

type PortfolioVideo = {
  title: string;
  src: string;
  thumbnail: string;
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
    { title: 'Coordinadora', src: '/videos/Coordinadora.mp4', thumbnail: '/posters/Coordinadora.jpeg' },
    { title: 'Corvette', src: '/videos/Corvette.mp4', thumbnail: '/posters/Corvette.jpeg' },
    { title: 'Full motion', src: '/videos/Full motion.mp4', thumbnail: '/posters/Full motion.jpeg' },
    { title: 'Pro video full', src: '/videos/Pro video full.mp4', thumbnail: '/posters/Pro video full.jpeg' },
    { title: 'Video WC', src: '/videos/Video WC.mp4', thumbnail: '/posters/Video WC.jpeg' },
    { title: 'Videoluisito', src: '/videos/Videoluisito.mp4', thumbnail: '/posters/Videoluisito.jpeg' },
    { title: 'Cine MVC', src: '/videos/Nuevos/Cine MVC Full.mp4', thumbnail: '/posters/Nuevo/Fondo Cine MVC.png' },
    { title: 'El Diablo viste a la moda', src: '/videos/Nuevos/MVC El Diablo viste a la moda full.mp4', thumbnail: '/posters/Nuevo/El diablo viste a la moda.png' },
    { title: 'Reel bombox', src: '/videos/Nuevos/Reel bombox 1.mp4', thumbnail: '/posters/Nuevo/Reel 1 bombox.png' },
    { title: 'One Piece', src: '/videos/Nuevos/Video 3.mp4', thumbnail: '/posters/Nuevo/one piece.png' },
    { title: 'Toyota Pro', src: '/videos/Nuevos/Video toyota pro.mp4', thumbnail: '/posters/Nuevo/Carro.png' },
    { title: 'Airbnb', src: '/videos/Nuevos/Video2.mp4', thumbnail: '/posters/Nuevo/Inmobiliaria .png' }
  ];

  protected readonly selectedVideo = signal<PortfolioVideo | null>(null);

  protected openVideo(video: PortfolioVideo): void {
    this.selectedVideo.set(video);
  }

  protected closeVideo(): void {
    this.selectedVideo.set(null);
  }
}
