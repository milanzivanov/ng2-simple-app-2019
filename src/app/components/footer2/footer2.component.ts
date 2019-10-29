import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer2',
  template: `
  <footer class="footer">
    <div class="container">
        <div class="content has-text-centered">
            <p>
                Made with <3 by <a href="https://twitter.com/chrisoncode">Chris from Scotch</a>
            </p>
        </div>
    </div>
  </footer>
  `,
  styles: []
})
export class Footer2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
