import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '@env';

@Component({
  selector: 'optimization-bundle-analyze',
  standalone: true,
  template: `
    <div class="bg-white pt-6 sm:pt-8 lg:pt-12">
      <div class="max-w-screen-2xl px-4 md:px-8 pb-4 mx-auto">
        <div class="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-blue-500 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
          <div class="order-1 sm:order-none w-11/12 sm:w-auto inline-block text-white text-sm md:text-base mb-2 sm:mb-0">
            <pre class="font-semibold text-gray-200 w-full" text-sm preHighlight>{{ code }}</pre>
          </div>
        </div>
      </div>
    </div>

    <iframe [src]="analyzeUrl" frameborder="0" class="h-[80vh] w-11/12 m-auto"></iframe>
  `,
})
export class OptimizationBundleAnalyze {
  analyzeUrl!: SafeResourceUrl;
  code = `## generate report file
ng build --stats-json && node_modules/.bin/webpack-bundle-analyzer dist/ng-tutorial/stats.json -r assets/analyze.html -m static
## start HTTP server to show bundle report
ng build --stats-json && node_modules/.bin/webpack-bundle-analyzer dist/ng-tutorial/stats.json
`;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.analyzeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.backend}/assets/analyze.html`);
  }
}
