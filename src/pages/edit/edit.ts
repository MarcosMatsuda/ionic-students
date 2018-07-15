import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { StudentProvider } from '../../providers/students/student';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public student: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public studentProvider: StudentProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.student = navParams.get("student");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  edit() {
    console.log(this.student);

    var studentRequest = {
      name: this.student.fullname,
      age: this.student.age,
      gender: this.student.gender
    }

    let loading = this.loadingCtrl.create({
      content: 'Editando estudante...'
    });

    loading.present();

    this.studentProvider.update(this.student.id, studentRequest).subscribe(response => {
      loading.dismiss();
      console.log(response);
      let alert = this.alertCtrl.create({
        title: 'Sucesso',
        subTitle: 'Estudante editado com sucesso',
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
    });
  }

}
