import { Component, h, Host } from '@stencil/core';

import '@ionic/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {




  async postButtonId() {
    console.log('UPDATE WIRE PRICE');

    let response = await fetch('https://localhost:7031/api/LogiCharsAPI');

    let payload = await response.json();

    return payload;

    // do something
  }


 async render() {

  let payload2 = await this.postButtonId();
  console.log("API connector");
  console.log(payload2);

    let payload = [
      {
        "id": 1,
        "explanation": "implies; if ... then",
        "unicode": "U+2192",
        "htmlValue": "&#8594;",
        "htmlEntity": "&rarr;",
        "laTeXSymbol": "\\to \\to or",
        "symbolChar": "→"
      },
      {
        "id": 2,
        "explanation": "if and only if; iff; means the same as",
        "unicode": "U+27F7",
        "htmlValue": "&#10231;",
        "htmlEntity": "&#10231;",
        "laTeXSymbol": "\\leftrightarrow",
        "symbolChar": "⟷"
      },
      {
        "id": 3,
        "explanation": "not",
        "unicode": "U+00AC",
        "htmlValue": "&#172;",
        "htmlEntity": "&not;",
        "laTeXSymbol": "\\neg \\lnot or \\neg",
        "symbolChar": "¬"
      },
      {
        "id": 5,
        "explanation": "and",
        "unicode": "U+2227",
        "htmlValue": "&#8743;",
        "htmlEntity": "&and;",
        "laTeXSymbol": "\\wedge",
        "symbolChar": "∧"
      },
      {
        "id": 6,
        "explanation": "for all; for any; for each",
        "unicode": "U+2200",
        "htmlValue": "&#8704;",
        "htmlEntity": "&forall;",
        "laTeXSymbol": "\\forall",
        "symbolChar": "∀"
      }
    ];
    console.log("Static payload")
    console.log(payload);

    return(
      <Host>
        <ion-grid>
          <ion-row>
            <ion-col sizeMd={'12'} sizeLg={'12'}>
              <ion-card className={'ion-padding'}>
                <ion-row>
                  {payload.map(p => (
                    <ion-col>
                      <logic-button value={p} />
                    </ion-col>
                  ))
                  }
                </ion-row>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </Host>
    );
  }
}
