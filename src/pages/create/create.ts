import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { StudentProvider } from '../../providers/students/student';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  public fullname: string = '';
  public gender: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public studentProvider: StudentProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

  }

  create() {
    var student = {
      id: "8",
      name: this.fullname,
      gender: this.gender,
      age: "10"
    }
    console.log(student);

    let loading = this.loadingCtrl.create({
      content: 'Adicionando estudante...'
    });

    loading.present();

    this.studentProvider.create(student).subscribe(response => {
      loading.dismiss();
      console.log(response);
      let alert = this.alertCtrl.create({
        title: 'Sucesso',
        subTitle: 'Estudante criado com sucesso',
        buttons: [
          {
            text: 'Ok'
          }
        ]
      });

      alert.onDidDismiss(() => {
        this.navCtrl.pop();
      });

      alert.present();
    }, () => {
      loading.dismiss();

      this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Não foi possível criar o estudante',
        buttons: [
          {
            text: 'Ok'
          }
        ]
      }).present();
    });
  }

}
