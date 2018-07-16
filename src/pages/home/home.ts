import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StudentProvider } from "../../providers/students/student";
import { EditPage } from "../edit/edit";
import { CreatePage } from '../create/create';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [StudentProvider]
})
export class HomePage {

    public students = [];
    public studentsOrg = []
    public searchTerm: string = ''

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private studentProvider: StudentProvider,
        public loadingCtrl: LoadingController) {

        
    }

    ionViewWillEnter() {
        this.getStudents();
    }

    public getStudents() {
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        loading.present();

        this.studentProvider.findAll().subscribe(response => {
            loading.dismiss();

            this.studentsOrg = response;
            this.students = response;
        })
    }

    public filterList() {
        if (this.searchTerm != '') {
            console.log(`filtrando com ${this.searchTerm}`)
            this.students = this.studentsOrg.filter(student => {
                if (student.fullname.toLowerCase().includes(this.searchTerm.toLowerCase())) {
                    return true
                }
                return false
            })
        }
        else {
            console.log("voltando ao estado original")
            this.students = this.studentsOrg
        }
    }

    public cancelFilter() {
        this.students = this.studentsOrg
    }


    public pageEdit(student: any) {

        this.navCtrl.push(EditPage, {
            student: student
        });
    }

    public pageCreate() {
        this.navCtrl.push(CreatePage);
    }
}
