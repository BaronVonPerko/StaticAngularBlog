import { Component, OnInit } from '@angular/core';
import ProjectType from 'src/app/models/project-type';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-type-chooser',
  templateUrl: './project-type-chooser.component.html',
})
export class ProjectTypeChooserComponent implements OnInit {

  projectTypeChoices: ProjectType[] = [];
  projectTypeSelected: ProjectType;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.projectTypeChoices.push(
      {
        title: 'WordPress',
        // tslint:disable-next-line: max-line-length
        details: 'WordPress powers 35% of the web!  It is perfect for blogs or websites that are updated regularly.  Choose this if you want to have control over updating content and adding new pages yourself.',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeznhRHNisIDmVDXBavv0aOzfREGgFKFmRfl5FKA2HippR1hQ/viewform?embedded=true',
      }, {
        title: 'Static Website',
        // tslint:disable-next-line: max-line-length
        details: 'Static websites are lightweight, fast, and lend themselves to cheap hosting solutions.  Choose this if you are not planning to update your website often.  Updates would require a developer to modify and upload changes to the server.',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfXumwOR-yJzoAxC5V3c2iRDCEoNmHD1vq74TLojaNtwLn8WA/viewform?embedded=true',
      }, {
        title: 'Custom Web Application',
        // tslint:disable-next-line: max-line-length
        details: 'Web applications can vary from simple to extremely complex apps.  If you need a custom solution for a problem, this is the way to go!',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfiOXdxd2IVnVGhXJq3vCKIV8Ra09lT2gz51bQxWf-iYwXpSw/viewform?embedded=true',
      });
  }

  get safeFormUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.projectTypeSelected.formUrl);
  }

}
