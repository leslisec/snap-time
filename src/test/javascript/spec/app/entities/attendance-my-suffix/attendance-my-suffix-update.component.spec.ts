/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SnaptimeTestModule } from '../../../test.module';
import { AttendanceMySuffixUpdateComponent } from 'app/entities/attendance-my-suffix/attendance-my-suffix-update.component';
import { AttendanceMySuffixService } from 'app/entities/attendance-my-suffix/attendance-my-suffix.service';
import { AttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';

describe('Component Tests', () => {
    describe('AttendanceMySuffix Management Update Component', () => {
        let comp: AttendanceMySuffixUpdateComponent;
        let fixture: ComponentFixture<AttendanceMySuffixUpdateComponent>;
        let service: AttendanceMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SnaptimeTestModule],
                declarations: [AttendanceMySuffixUpdateComponent]
            })
                .overrideTemplate(AttendanceMySuffixUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AttendanceMySuffixUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AttendanceMySuffixService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new AttendanceMySuffix(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.attendance = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new AttendanceMySuffix();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.attendance = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
