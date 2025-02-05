import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { EpsodiesComponent } from "./components/epsodies/epsodies.component";
import { CharactersComponent } from "./components/characters/characters.component";
import { VideosComponent } from "./components/videos/videos.component";
import { ArtsComponent } from "./components/arts/arts.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent, EpsodiesComponent, CharactersComponent, VideosComponent, ArtsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-waling-dead';
}
