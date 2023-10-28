import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  windowWidth: any;
  isScreenSizeLessThan640px: boolean = false;
  isScreenSizeBiggerThan640px: boolean = false;

  ngOnInit() {
    // Obtén el ancho de la ventana
    const windowWidth = window.innerWidth;

    this.isScreenSizeLessThan640px = windowWidth < 640;
    this.isScreenSizeBiggerThan640px = windowWidth > 640;
  }
}
