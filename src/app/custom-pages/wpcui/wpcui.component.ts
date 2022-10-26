import { Component, OnInit } from '@angular/core';
import { PageHeadService } from '../../services/page-head.service';

@Component({
  selector: 'app-wpcui',
  standalone: true,
  template: `
    <h1 class="text-indigo-600">
      Customizer UI Plugin for WordPress Developers
    </h1>

    <p class="mb-8">
      Introducing an all-in-one development plugin built to save you time when
      developing a highly customizable WordPress theme!
    </p>

    <img class="max-w-3xl mx-auto" src="/assets/images/wpcui.png" />

    <p class="my-8">
      The plugin is currently available in the WordPress Plugin Directory, and
      you can get started today! Check out the
      <a target="_blank" href="https://github.com/baronvonperko/wpcui"
        >GitHub Repository</a
      >, which includes a link to download the latest build, or install it
      directly into your existing WordPress website from the
      <a
        target="_blank"
        href="https://wordpress.org/plugins/customizer-user-interface/"
        >Plugin Directory</a
      >!
    </p>
  `,
})
export class WpcuiComponent implements OnInit {
  constructor(private pageHeadService: PageHeadService) {}

  ngOnInit(): void {
    this.pageHeadService.setTitle('CustomizerUI Plugin for WordPress');
  }
}
