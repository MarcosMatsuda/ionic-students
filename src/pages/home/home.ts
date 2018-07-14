import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StudentProvider} from "../../providers/students/student";
import {EditPage} from "../edit/edit";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [StudentProvider]
})
export class HomePage {

    public students = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private studentProvider:StudentProvider) {

        this.getStudents()
    }

    public  getStudents(){
        this.studentProvider.findAll().subscribe(response => this.students = response)
    }

    public pageEdit(){
        this.navCtrl.push(EditPage);


    }


}
