class Bandmember {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }

    describe() {
        return `${this.name} plays ${this.instrument}.`;
    }
}

class Section {
    constructor(name) {
        this.name = name;
        this.bandmembers = [];
    }

    addBandmember(bandmember) {
        if (bandmember instanceof Bandmember) {
            this.bandmembers.push(bandmember);
        } else {
            throw new Error(`Argument is not a Bandmember object: ${bandmember}`);
        }
    }

    describe() {
        return `The ${this.name} section has ${this.bandmembers.length} members.`;
    }
}

class Menu {
    constructor() {
        this.section = [];
        this.sectionSelection = null; 
    }
    
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createSection();
                    break;
                case '2':
                    this.viewSection();
                    break;
                case '3':
                    this.deleteSection();
                    break;
                case '4':
                    this.displaySections();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }
        alert('Thank you for supporting the arts!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit program
            1) Create new section
            2) View section
            3) Delete section
            4) Display all sections
        `);
    }

    showBandmemberMenuOptions(sectionInfo) {
        return prompt(`
            0) Exit program
            1) Create bandmember
            2) Delete bandmember
            --------------------------
            ${sectionInfo}
        `);

    }
    createSection() {
        let name = prompt('Enter name of new section: ');
        this.section.push(new Section(name));
    }

    displaySections() {
        let bandString = '';
        for (let i = 0; i < this.section.length; i++) {
            bandString += i + ') ' + this.section[i].name + '\n';
        }
        alert(bandString);
    }

    viewSection() {
        let index = prompt('Enter the index of the section you would like to view: ');
        if (index > -1 && index < this.section.length) {
            this.sectionSelection = this.section[index];
            let description = 'Section name: ' + this.sectionSelection.name + '\n';
            for (let i = 0; i < this.sectionSelection.bandmembers.length; i++) {
                description += i + ') ' + this.sectionSelection.bandmembers[i].name
                + ' - ' + this.sectionSelection.bandmembers[i].instrument + '\n';
            }
            
            let selection = this.showBandmemberMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createBandmember();
                    break;
                case '2':
                    this.deleteBandmember();
                default:
                    selection = 0;
            }
        }
    }

    deleteSection() {
        let index = prompt('Enter the index of the section you would like to delete: ');
        if (index > -1 && index < this.section.length) {
            this.section.splice(index, 1);
        } 
    }

    createBandmember() {
        let name = prompt('Enter name of new bandmember: ');
        let instrument = prompt('Enter instrument or role of new bandmember: ');
        this.sectionSelection.bandmembers.push(new Bandmember(name, instrument));
     }
 
    deleteBandmember() {
        let index = prompt('Enter the index of the player you would like to delete: ');
        if (index > -1 && index < this.sectionSelection.bandmembers.length) {
            this.sectionSelection.bandmembers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

//selection = this.showBandMenuOptions();
