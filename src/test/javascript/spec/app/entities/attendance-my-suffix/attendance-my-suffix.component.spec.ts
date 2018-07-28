/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SnaptimeTestModule } from '../../../test.module';
import { AttendanceMySuffixComponent } from 'app/entities/attendance-my-suffix/attendance-my-suffix.component';
import { AttendanceMySuffixService } from 'app/entities/attendance-my-suffix/attendance-my-suffix.service';
import { AttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';

describe('Component Tests', () => {
    describe('AttendanceMySuffix Management Component', () => {
        let comp: AttendanceMySuffixComponent;
        let fixture: ComponentFixture<AttendanceMySuffixComponent>;
        let service: AttendanceMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SnaptimeTestModule],
                declarations: [AttendanceMySuffixComponent],
                providers: []
            })
                .overrideTemplate(AttendanceMySuffixComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AttendanceMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AttendanceMySuffixService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new AttendanceMySuffix(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.attendances[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
