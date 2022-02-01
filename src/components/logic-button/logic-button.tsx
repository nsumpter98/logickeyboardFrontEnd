import { Component, h, Prop } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'logic-button',
  shadow: true,
})


export class LogicButton {

  @Prop() value: any;

  componentDidLoad() {
    console.log('this.value');
    console.log(this.value);
    document.getElementById('button' + this.value.id).innerHTML = this.value.htmlValue;
  }
  componentDidRender(){
    //document.getElementById('button' + this.value.id).innerHTML = this.value.htmlValue;
  }

  onClickHandler(event) {
    let buttonId = event.target.id.slice(6);
    console.log(buttonId);
    // todo post to API
    // await postButtonId(buttonId);

    /*
    //TODO: POST EXAMPLE
    async postButtonId(buttonId) {
      console.log('UPDATE WIRE PRICE');
      let preload = {
        Id: buttonId,
      };
      console.log(preload);
      let response = await fetch('https://localhost:44345/api/Settings/UpdateWirePrice', {
        method: 'POST',
        body: JSON.stringify(preload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let payload = await response.json();
      console.log('note:');
      console.log(payload);

      // do something
    }
    */
  }

  render() {

    const style = {
      'font-size': '3rem',
    };
    return [
      <ion-button style={style}
                  onClick={(event: UIEvent) => this.onClickHandler(event)}
                  strong={true}
                  size={'large'}
                  expand={'block'}
                  color={'primary'}
                  id={'button' + this.value.id} />,
    ];
  }
}
