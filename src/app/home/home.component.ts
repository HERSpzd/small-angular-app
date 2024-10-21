import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  //Define some text displayed on the page
  title: string = 'PART2';
  artistId: string = 'Artist ID:';
  name: string = 'Name:';
  dob: string = 'DOB:';
  gender: string = 'Gender:';
  artworkType: string = 'Artwork Type:';
  contactInfo: string = 'Contact info:';
  exhibitionDate: string = 'Exhibition date:';
  specialNotes: string = 'Special notes:';
  searchResult:string = 'Search result:';


  //Define some text displayed on the page
  txt1: number |null = null;
  txt2: string = '';
  txt3: string = '';
  list4: string[] = ["Female", "Male", "Unspecified"];
  list5: string[] = ["painting", "sculpture", "photograph", "video art", "digital art", "printmaking"];
  txt6: string = '';
  txt7: string = '';
  txt8: string = '';
  txt9: string | null = null;
  txt10: any = '';
  selectedList4: string = 'Female';
  selectedList5: string = 'painting';

  //Artist array
  artistData: any[] = [];
  index:number = 0;
  //Featured artist array
  featuredArtistData: any[] = [];
  index2:number = 0;

  errorMessage : string = '';

  //Corresponding search result box data
  txt11: number |null = null;
  txt12: string = '';
  txt13: string = '';
  txt14: string = '';
  txt15: string = '';
  txt16: string = '';
  txt17: string = '';
  txt18: string = '';



  /**
   * 
   * Add Artist Method
   * 
   * The user inputs relevant artist information and clicks the add button, 
   * and the list will be updated synchronously. If there is information in the special notes of 
   * the user's input information, clicking the add button will also display the list of unique 
   * artists synchronously.
   * 
   * 
   * @returns void
   */
  onAdd(): void {
    //Traverse the artist array to find if there are identical artist IDs.
    for (let i = 0; i < this.artistData.length; i++) {
	    if (this.artistData[i].artistId === this.txt1) {
	        
        this.errorMessage = "An artist with the same ID already exists.";
	      return;

	    }
    }

    //If the user does not enter a name, an error message will be reported
    if (this.txt2 === '') {

      this.errorMessage = "Artist name must be entered.";
      return;

    }

    //If the user does not enter a DOB, an error message will be reported
    if (this.txt3 === '') {

      this.errorMessage = "DOB must be entered.";
      return;

    }

    //If the user does not enter a Contact info, an error message will be reported
    if (this.txt6 === '') {

      this.errorMessage = "Contact info must be entered.";
      return;

    }

    //If the user does not enter a Exhibition date, an error message will be reported
    if (this.txt7 === '') {

      this.errorMessage = "Exhibition date must be entered.";
      return;

    }

    //Add an element to the artist array
    this.artistData.push ({
      artistId:this.txt1,
      name:this.txt2,
      dob:this.txt3,
      gender: this.selectedList4,
      artworkType: this.selectedList5,
      contactInfo: this.txt6,
      exhibitionDate: this.txt7,
      specialNotes: this.txt8,
      i:this.index
    });
    console.log(this.artistData);

    //If there are annotations in the special notes, add an element to the featured artist array
    if (this.txt8 !== "") {
      this.featuredArtistData.push ({
        artistId:this.txt1,
        name:this.txt2,
        dob:this.txt3,
        gender: this.selectedList4,
        artworkType: this.selectedList5,
        contactInfo: this.txt6,
        exhibitionDate: this.txt7,
        specialNotes: this.txt8,
        i2:this.index2
      });
    }

    

    console.log(this.featuredArtistData);
    
  }

    /**
   * 
   * Edit Artist Method
   * 
   * Users update artist information in the input boxes above, 
   * and then click the edit button. The list below will be displayed synchronously
   * 
   * @returns void
   */
  onEdit(): void {
    let editId = this.txt1;
    let findId = false;
  
    //Loop through the artist array, find the artist and modify the information
    for (let i = 0; i < this.artistData.length; i++) {
      if (editId === this.artistData[i].artistId) {
        this.artistData[i].name = this.txt2;
        this.artistData[i].dob = this.txt3;
        this.artistData[i].gender = this.selectedList4;
        this.artistData[i].artworkType = this.selectedList5;
        this.artistData[i].contactInfo = this.txt6;
        this.artistData[i].exhibitionDate = this.txt7;
        this.artistData[i].specialNotes = this.txt8;
        findId = true;
        this.errorMessage = "Artist information updated successfully.";
  
        //If special notes were changed from empty to non-empty
        ////remove the element from the artistData array
        if (this.txt8 !== "") {
          let findChange = false;
          for (let i = 0; i < this.featuredArtistData.length; i++) {
            if (this.featuredArtistData[i].artistId === this.txt1) {
              findChange = true;
              break;
            }
          }


          if (!findChange) {
            this.featuredArtistData.push({
              artistId: this.txt1,
              name: this.txt2,
              dob: this.txt3,
              gender: this.selectedList4,
              artworkType: this.selectedList5,
              contactInfo: this.txt6,
              exhibitionDate: this.txt7,
              specialNotes: this.txt8,
              i2: this.index2
            });
          }
        }
  
        //If the special comment changes from non empty to empty, 
        //remove the element from the featuredArtistData array
        if (this.txt8 === "") {
          for (let i = 0; i < this.featuredArtistData.length; i++) {
            if (this.featuredArtistData[i].artistId === this.txt1) {
              this.featuredArtistData.splice(i, 1);
              break;


            }
          }

        }
  
        break;
      }

    }
  
    //If the artist is not found, an error message will be displayed
    if (!findId) {
      this.errorMessage = "Not Found Artist!";
    }





  }
    

  /**
   * 
   * Delete Artist Method
   * 
   * Users can input the artist ID which they want to delete in the front
   * input field and then press delete button. And the artist will delete.
   * 
   * @returns void
   */
  onDelete(): void {
    //If the artist array is empty, display an error message
    if (this.artistData.length === 0) {
      this.errorMessage = "The artist list is empty.";
    }

    let deleteId = this.txt10;

    //Traverse the artist array, find the artist to be deleted, and then delete it
    for (let i = 0; i < this.artistData.length; i++) {
      if (deleteId === this.artistData[i].artistId) {
        this.artistData.splice(i, 1);
      } else {
        this.errorMessage = "Unable to find the artist ID to delete.";
      }
    }

    let deleteFId = this.txt10;

    //Delete the found artist from the featured artist array
    for (let i = 0; i < this.featuredArtistData.length; i++) {
      if (deleteFId === this.featuredArtistData[i].artistId) {
        this.featuredArtistData.splice(i, 1);
      }
    }
    
    
  }

  /**
   * 
   * Search Artist Method
   * 
   * Search the artist ID in the input field and press search button
   * and the search result will display in the below table.
   * 
   * @returns void
   */
  search(): void {
    
    let searchContent = this.txt9;

    //Corresponding search result box data
    this.txt11 = null;
    this.txt12 = '';
    this.txt13 = '';
    this.txt14 = '';
    this.txt15 = '';
    this.txt16 = '';
    this.txt17 = '';
    this.txt18 = '';


    let findId : boolean = false;

    //Loop through the artist array to find the same artist and display it in the table below
    for (let i = 0;i < this.artistData.length;i ++) {
      if (searchContent === this.artistData[i].artistId) {
        console.log('Artist found:', this.artistData[i]);
        this.txt11 = this.artistData[i].artistId
        this.txt12 = this.artistData[i].name;
        this.txt13 = this.artistData[i].dob;
        this.txt14 = this.artistData[i].gender;
        this.txt15 = this.artistData[i].artworkType;
        this.txt16 = this.artistData[i].contactInfo;
        this.txt17 = this.artistData[i].exhibitionDate;
        this.txt18 = this.artistData[i].specialNotes;
        findId = true
        break;
      } 
      

    }
    
    //If the artist is not found, an error message will be displayed
    if (!findId) {
      this.errorMessage = "Artist not found.";
    }
    
  }
}
