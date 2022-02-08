import { Component, h, Prop } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'logic-button',
  shadow: false,
})


export class LogicButton {

  @Prop() value: any;

  componentDidRender() {
    console.log('this.value - did load');
    console.log(this.value.htmlValue);

    document.getElementById('button' + this.value.id).innerHTML = this.value.htmlValue;
  }


 async onClickHandler(event) {
    let buttonId = event.target.id.slice(6);
    console.log(buttonId);
    // todo post to API
    // await postButtonId(buttonId);

    //TODO: POST EXAMPLE
      console.log('UPDATE WIRE PRICE');
      let preload = {
        Id: buttonId,
      };
      console.log(preload);
      let response = await fetch('https://localhost:7031/api/LogiCharsAPI/' + buttonId);
      let payload = await response.json();
      console.log('note:');
      console.log(payload);

      // do something
  }

  render() {

    const style = {
      'font-size': '3rem',
    };
    console.log('this.value - return');
    console.log(this.value.id);
    return [

      <ion-button style={style}
                  onClick={(event: UIEvent) => this.onClickHandler(event)}
                  strong={true}
                  size={'large'}
                  expand={'block'}
                  background-color={'success'}
                  id={'button' + this.value.id} />,

    ];
  }
}
