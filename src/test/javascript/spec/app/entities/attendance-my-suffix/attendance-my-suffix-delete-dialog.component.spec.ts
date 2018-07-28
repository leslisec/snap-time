/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SnaptimeTestModule } from '../../../test.module';
import { AttendanceMySuffixDeleteDialogComponent } from 'app/entities/attendance-my-suffix/attendance-my-suffix-delete-dialog.component';
import { AttendanceMySuffixService } from 'app/entities/attendance-my-suffix/attendance-my-suffix.service';

describe('Component Tests', () => {
    describe('AttendanceMySuffix Management Delete Component', () => {
        let comp: AttendanceMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<AttendanceMySuffixDeleteDialogComponent>;
        let service: AttendanceMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SnaptimeTestModule],
                declarations: [AttendanceMySuffixDeleteDialogComponent]
            })
                .overrideTemplate(AttendanceMySuffixDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AttendanceMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AttendanceMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
