import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Map } from 'immutable';

import { SetCharacterStressAction, ToggleAspectAction, ToggleSkillAction } from '../character/character.actions';
import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { CharacterDetail } from '../model/character-detail';
import { Skill } from '../model/skill';
import { ToggleOverlayAction } from '../ui/ui.actions';

@Component({
    selector: 'fate-sheet',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./sheet.component.less'],
    templateUrl: './sheet.component.haml'
})
export class SheetComponent {
    @Input() character: Character;
    @Input() detail: CharacterDetail;
    @Input() loading: boolean;

    fatePoints: number = 1;

    adjectiveLadder = Map([
        [-2, 'Terrible'],
        [-1, 'Poor'],
        [+0, 'Mediocre'],
        [+1, 'Average'],
        [+2, 'Fair'],
        [+3, 'Good'],
        [+4, 'Great'],
        [+5, 'Superb'],
        [+6, 'Fantastic'],
        [+7, 'Epic'],
        [+8, 'Legendary']
    ]);

    constructor(private store: Store<any>) {}

    setStress(event: any, track: number, stress: number, value: boolean): void {
        this.store.dispatch(new SetCharacterStressAction(track, stress - 1, value));
        event.preventDefault();
        event.stopPropagation();
    }

    isAspectSelected(aspect: Aspect): boolean {
        return this.detail && this.detail.selectedAspects.contains(aspect);
    }

    toggleAspect(aspect: Aspect): void {
        this.store.dispatch(new ToggleAspectAction(aspect));
    }

    isSkillSelected(skill: Skill): boolean {
        return this.detail && this.detail.selectedSkills.contains(skill);
    }

    toggleSkill(skill: Skill): void {
        this.store.dispatch(new ToggleSkillAction(skill));
    }

    addPoint(): void {
        this.fatePoints += 1;
    }

    spendPoint(): void {
        this.fatePoints -= 1;
    }

    addModifier(): void {
        this.store.dispatch(new ToggleOverlayAction());
    }

    getIndex(indexedPair: [number, any]): number {
        return indexedPair[0];
    }

}
