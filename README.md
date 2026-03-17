# Nurse-Recording-API

This is the API for the Nurse Recording System, built with Hono.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm start
   ```

The server will run on http://localhost:3001

## API Documentation

Visit `http://localhost:3001/ui` for interactive API documentation using Swagger UI.

## Endpoints

The API includes the following endpoints, mirroring the Nurse-Recording-System-RE backend:

### Auth
- POST /api/Auth/login - User login
- POST /api/Auth/logout - User logout

### User
- POST /api/CreateUser/user - Create a new user
- POST /api/UserForm/create/user_form - Create user form
- PUT /api/UserForm/update/user_form - Update user form
- DELETE /api/UserForm/delete/user_form/{formId} - Delete user form

### Nurse
- GET /api/NurseUser/view/all_users - View all users
- GET /api/NurseUserForm/user/form_list - User form list
- POST /api/NursePatientRecord/create/patient_record - Create patient record
- GET /api/NursePatientRecord/view/patient_record/{patientRecordId} - View patient record
- GET /api/NursePatientRecord/view/patient_record_list - View patient record list
- PUT /api/NursePatientRecord/update/patient_record/{patientRecordId} - Update patient record
- POST /api/NurseMedecineStock/create_stock - Create medicine stock
- DELETE /api/NurseMedecineStock/delete_stock/{medecineStockId} - Delete medicine stock
- PUT /api/NurseMedecineStock/update_stock/{medecineStockId} - Update medicine stock
- PUT /api/NurseClinicStatus/update_clinic_status/{id} - Update clinic status
- POST /api/NurseAppointmentSchedule/create_appointment - Create appointment
- GET /api/NurseAppointmentSchedule/view_appointment_list - View appointment list
- GET /api/NurseAppointmentSchedule/view_appointment/{AppointmentScheduleId} - View appointment
- PUT /api/NurseAppointmentSchedule/update_appointment/{AppointmentScheduleId} - Update appointment
- POST /api/FollowUps - Create follow up
- PUT /api/FollowUps/{id} - Update follow up
- DELETE /api/FollowUps/{id} - Delete follow up

### Helper
- GET /api/HelperUserForm/view_user_form/{formId} - View user form
- GET /api/HelperMedecineStock/view_all_stock - View all medicine stock
- GET /api/HelperClinicStatus/view_all_clinic_status - View all clinic status

### Admin
- DELETE /api/AdminUsers/delete/user/{userId} - Delete user
- DELETE /api/AdminPatientRecord/delete/patient_record/{patientRecordId} - Delete patient record
- POST /api/AdminNurse/register - Register nurse
- POST /api/AdminClinicStatus/create/clinic_status - Create clinic status
- DELETE /api/AdminClinicStatus/delete/clinic_status/{clinicStatusId} - Delete clinic status

All endpoints currently return placeholder JSON responses. To integrate with the actual Nurse-Recording-System-RE, you would need to implement the business logic, database connections, and authentication as per the original C# backend.
