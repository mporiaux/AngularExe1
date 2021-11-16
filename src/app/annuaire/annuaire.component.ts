import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {

  contacts:Contact[]=[];
  nom:string="";
  tel:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onAddContact(){
    if(this.onVerifContact()>0) alert("contact déjà existant");
    else this.contacts.push(new Contact(this.nom,this.tel));
    this.nom="";
    this.tel="";
  }

  onSearchContact(){
   var pos = this.onVerifContact();
   if(pos>=0)   this.tel=this.contacts[pos].tel;
   else {
     alert("contact inconnu");
     this.nom="";
     this.tel="";
   }
  }

  onVerifContact():number{
    for(let i=0;i<this.contacts.length;i++) {
       if (this.contacts[i].nom == this.nom) return i;
     }
    return -1
  }

}

class Contact {
  nom:string;
  tel:string;
  constructor(nom:string,tel:string) {
    this.nom=nom;
    this.tel=tel;
  }


}
