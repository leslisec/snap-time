/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SnaptimeTestModule } from '../../../test.module';
import { AttendanceMySuffixDetailComponent } from 'app/entities/attendance-my-suffix/attendance-my-suffix-detail.component';
import { AttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';

describe('Component Tests', () => {
    describe('AttendanceMySuffix Management Detail Component', () => {
        let comp: AttendanceMySuffixDetailComponent;
        let fixture: ComponentFixture<AttendanceMySuffixDetailComponent>;
        const route = ({ data: of({ attendance: new AttendanceMySuffix(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SnaptimeTestModule],
                declarations: [AttendanceMySuffixDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AttendanceMySuffixDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AttendanceMySuffixDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.attendance).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
