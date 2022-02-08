import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
@State() payload : any;



  async componentWillLoad() {
    console.log('API');

    await fetch('https://localhost:7031/api/LogiCharsAPI')
    .then((data) => data.json())
    .then(result => {
      console.log("result: ");
      console.log(result);
      this.payload = result;})
      .catch(error => console.log("error: ", error));


    // do something
  }


  render() {

  let payload =  this.payload;


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
