import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormDetails } from 'src/app/core/models/contactForm';
import { ContactService } from 'src/app/core/services/contact.service';
declare var bootstrap: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted: boolean = false;
  isFormValid: boolean = false;
  http: HttpClient = inject(HttpClient);

  @ViewChild('feedbackModal') feedbackModal!: ElementRef<HTMLDivElement>;
  feedbackMessage: string = '';
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // company: [''],
      // phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      message: ['', Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get company() {
    return this.contactForm.get('company');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get message() {
    return this.contactForm.get('message');
  }

  OnFormSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      const formData: ContactFormDetails = this.contactForm.value;
      console.log('Form Data: ', formData);
      

      this.contactService.sendContactForm(formData).subscribe({
        next: (response) => {
          console.log(response);
          
          this.feedbackMessage = 'Form has been submitted successfully!';
          this.isSuccess = true;
          this.contactForm.reset();
          this.submitted = false;
          this.showModal();
        },
        error: (error) => {
          console.log('Error while submitting form: ', error);
          
          this.feedbackMessage = 'Something went wrong. Please try again.';
          this.isSuccess = false;
          this.showModal();
        }
      });
    } else {
      this.feedbackMessage = 'Please complete the form correctly.';
      this.isSuccess = false;
      this.contactForm.markAllAsTouched();
      this.showModal();
    }
  }

  showModal() {
    const modalEl = new bootstrap.Modal(this.feedbackModal.nativeElement);
    modalEl.show();
  }

}
