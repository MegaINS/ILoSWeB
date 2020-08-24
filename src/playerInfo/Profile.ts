import {Resources} from "../Resources";
import {Button} from "../Button";
import {Skill} from "./Skill";


export class Profile extends PIXI.Container {

    sections;

    constructor() {
        super();

        this.sections = {
            active: null,
            skills: this.initSkills(),
            wound: this.initWound(),
            spells: this.initSpells(),
            layers: this.initLayers()
        };


        var bg_chars = new PIXI.Sprite(Resources.userInfo.bg_chars);


        var bSkills = new Button(Resources.userInfo.profile.skills, () => {
            this.setSection(this.sections.skills);
        });

        bSkills.x = 15;
        bSkills.y = 160;


        var bWound = new Button(Resources.userInfo.profile.wound, () => {
            this.setSection(this.sections.wound);
        });
        bWound.y = 160;
        bWound.x = 110;

        var bSpells = new Button(Resources.userInfo.profile.spells, () => {
            this.setSection(this.sections.spells);
        });
        bSpells.y = 160;
        bSpells.x = 210;

        var bLayers = new Button(Resources.userInfo.profile.layers, () => {
            this.setSection(this.sections.layers);
        });
        bLayers.y = 160;
        bLayers.x = 320;


        var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 400, 280);
        bgScroll.y = 190;
        bgScroll.x = 10;


        const style = new PIXI.TextStyle({
            fill: "white",
            fontFamily: "Helvetica",
            fontSize: 13,
            wordWrapWidth: 400
        });
        var level = new PIXI.Text("2", style);
        level.y = 29;
        level.x = 25;
        var exp = new PIXI.Text("1234", style);
        exp.y = 29;
        exp.x = 95;
        var userClass = new PIXI.Text("Класс 3", style);
        userClass.y = 29;
        userClass.x = 185;
        var sex = new PIXI.Text("М", style);
        sex.y = 69;
        sex.x = 24;
        var location = new PIXI.Text("Город А", style);
        location.y = 69;
        location.x = 130;


        this.addChild(bgScroll);
        this.addChild(bg_chars);
        this.addChild(bSkills);
        this.addChild(bWound);
        this.addChild(bLayers);
        this.addChild(bSpells);
        this.addChild(level);
        this.addChild(exp);
        this.addChild(userClass);
        this.addChild(sex);
        this.addChild(location);
        this.setSection(this.sections.skills);


    }

    setSection(section) {
        if (this.sections.active != section) {
            if (this.sections.active != null) {
                this.removeChild(this.sections.active);
            }
            this.sections.active = section;
            if (section != null) {
                this.addChild(section);
            }
        }
    }

    skills = {};

    loadSkills(skillsData) {
        this.scrollingContainerSkills.innerContainer.removeChildren();
        let skillsArr=[];
        skillsArr[0] =  skillsData.filter((a)=>a.skillType==="attack")
        skillsArr[1] =  skillsData.filter((a)=>a.skillType==="mine")
        skillsArr[2] =  skillsData.filter((a)=>a.skillType==="production")
        var y = 0;
        for (let i = 0; i < skillsArr.length; i++) {
            let skills = skillsArr[i];
            for (let k = 0; k < skills.length; k++) {

                let skill = new Skill(skills[k])

                skill.y = y;
                this.scrollingContainerSkills.addChild(skill)
                this.skills[skills[k].name] = skill
                y+=46;
            }
        }
    }

    scrollingContainerSkills: PIXI.UI.ScrollingContainer;

    initSkills() {


        this.scrollingContainerSkills = new PIXI.UI.ScrollingContainer({
            width: 400,
            height: 280,
            scrollX: false,
            scrollY: true,
        });


        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13, 1),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13, 1),
            scrollingContainer: this.scrollingContainerSkills,
            vertical: true,
            autohide: true
        });


        scrollbar.anchorTop = 0;
        scrollbar.anchorRight = 0;

        var uiStage = new PIXI.UI.Stage(400, 280);
        uiStage.y = 190;
        uiStage.x = 10;

        uiStage.addChild(this.scrollingContainerSkills, scrollbar);

        return uiStage;
    }

    initWound() {


        var scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 400,
            height: 280,
            scrollX: false,
            scrollY: true,
        });

        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13, 1),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13, 1),
            scrollingContainer: scrollingContainer,
            vertical: true,
            autohide: false
        });
        const style = new PIXI.TextStyle({
            fill: "yellow",
            fontFamily: "Helvetica",
            fontSize: 20,
            wordWrapWidth: 400
        });
        var text = new PIXI.UI.Text("Сеты", style);
        text.align = "center";


        scrollingContainer.addChild(text);

        var uiStage = new PIXI.UI.Stage(400, 280);
        uiStage.y = 190;
        uiStage.x = 10;


        scrollbar.anchorTop = 0;
        scrollbar.anchorRight = 0;
        uiStage.addChild(scrollingContainer);
        uiStage.addChild(scrollbar);
        return uiStage;
    }

    initSpells() {
        var scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 400,
            height: 280,
            scrollX: false,
            scrollY: true,
        });

        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13, 1),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13, 1),
            scrollingContainer: scrollingContainer,
            vertical: true,
            autohide: false
        });
        const style = new PIXI.TextStyle({
            fill: "yellow",
            fontFamily: "Helvetica",
            fontSize: 20,
            wordWrapWidth: 400
        });
        var text = new PIXI.UI.Text("Spells", style);
        text.align = "center";


        scrollingContainer.addChild(text);

        var uiStage = new PIXI.UI.Stage(400, 280);
        uiStage.y = 190;
        uiStage.x = 10;


        scrollbar.anchorTop = 0;
        scrollbar.anchorRight = 0;
        uiStage.addChild(scrollingContainer);
        uiStage.addChild(scrollbar);
        return uiStage;
    }

    initLayers() {
        var scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 400,
            height: 280,
            scrollX: false,
            scrollY: true,
        });

        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13, 1),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13, 1),
            scrollingContainer: scrollingContainer,
            vertical: true,
            autohide: false
        });
        const style = new PIXI.TextStyle({
            fill: "yellow",
            fontFamily: "Helvetica",
            fontSize: 20,
            wordWrapWidth: 400
        });
        var text = new PIXI.UI.Text("Layers", style);
        text.align = "center";


        scrollingContainer.addChild(text);

        var uiStage = new PIXI.UI.Stage(400, 280);
        uiStage.y = 190;
        uiStage.x = 10;


        scrollbar.anchorTop = 0;
        scrollbar.anchorRight = 0;
        uiStage.addChild(scrollingContainer);
        uiStage.addChild(scrollbar);
        return uiStage;
    }


}