import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of, Subscription } from 'rxjs';
import { mockPostArray } from 'src/mocks/mock-posts';
import { throwError } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        HttpClientTestingModule,
        FontAwesomeModule,
        MatGridListModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'grid-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('grid-app');
  });

  it('should call unsubscribe when the component is destroyed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(Subscription.prototype, 'unsubscribe');
    app.ngOnDestroy();
    fixture.detectChanges();
    expect(Subscription.prototype.unsubscribe).toHaveBeenCalled();
  });

  it('should initialize the posts array on component initialization', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOn(app.grid, 'getAllPosts').and.returnValue(of(mockPostArray));
    app.ngOnInit();
    fixture.detectChanges();
    expect(app.grid.getAllPosts).toHaveBeenCalled();
  });

  it('should display snack error if the api returns error response', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app.snack,"open");
    spyOn(app.grid, 'getAllPosts').and.returnValue(throwError('Error'));
    app.ngOnInit();
    fixture.detectChanges();
    expect(app.snack.open).toHaveBeenCalled();
  });
});
