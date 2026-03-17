import { Hono } from 'hono'
import { swaggerUI } from '@hono/swagger-ui'

const app = new Hono()

// OpenAPI spec
const openApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Nurse Recording API',
    version: '1.0.0',
    description: 'API for Nurse Recording System'
  },
  paths: {
    '/api/Auth/login': {
      post: {
        summary: 'User login',
        responses: {
          200: { description: 'Success' }
        }
      }
    },
    '/api/Auth/logout': {
      post: {
        summary: 'User logout',
        responses: {
          200: { description: 'Success' }
        }
      }
    },
    // Add more paths as needed
  }
}

app.get('/doc', (c) => c.json(openApiSpec))

app.get('/ui', swaggerUI({ url: '/doc' }))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Auth endpoints
app.post('/api/Auth/login', (c) => {
  return c.json({ message: 'Login endpoint' })
})

app.post('/api/Auth/logout', (c) => {
  return c.json({ message: 'Logout endpoint' })
})

// User endpoints
app.post('/api/CreateUser/user', (c) => {
  return c.json({ message: 'Create user endpoint' })
})

app.post('/api/UserForm/create/user_form', (c) => {
  return c.json({ message: 'Create user form endpoint' })
})

app.put('/api/UserForm/update/user_form', (c) => {
  return c.json({ message: 'Update user form endpoint' })
})

app.delete('/api/UserForm/delete/user_form/:formId', (c) => {
  return c.json({ message: 'Delete user form endpoint' })
})

// Nurse endpoints
app.get('/api/NurseUser/view/all_users', (c) => {
  return c.json({ message: 'View all users endpoint' })
})

app.get('/api/NurseUserForm/user/form_list', (c) => {
  return c.json({ message: 'User form list endpoint' })
})

app.post('/api/NursePatientRecord/create/patient_record', (c) => {
  return c.json({ message: 'Create patient record endpoint' })
})

app.get('/api/NursePatientRecord/view/patient_record/:patientRecordId', (c) => {
  return c.json({ message: 'View patient record endpoint' })
})

app.get('/api/NursePatientRecord/view/patient_record_list', (c) => {
  return c.json({ message: 'View patient record list endpoint' })
})

app.put('/api/NursePatientRecord/update/patient_record/:patientRecordId', (c) => {
  return c.json({ message: 'Update patient record endpoint' })
})

app.post('/api/NurseMedecineStock/create_stock', (c) => {
  return c.json({ message: 'Create medicine stock endpoint' })
})

app.delete('/api/NurseMedecineStock/delete_stock/:medecineStockId', (c) => {
  return c.json({ message: 'Delete medicine stock endpoint' })
})

app.put('/api/NurseMedecineStock/update_stock/:medecineStockId', (c) => {
  return c.json({ message: 'Update medicine stock endpoint' })
})

app.put('/api/NurseClinicStatus/update_clinic_status/:id', (c) => {
  return c.json({ message: 'Update clinic status endpoint' })
})

app.post('/api/NurseAppointmentSchedule/create_appointment', (c) => {
  return c.json({ message: 'Create appointment endpoint' })
})

app.get('/api/NurseAppointmentSchedule/view_appointment_list', (c) => {
  return c.json({ message: 'View appointment list endpoint' })
})

app.get('/api/NurseAppointmentSchedule/view_appointment/:AppointmentScheduleId', (c) => {
  return c.json({ message: 'View appointment endpoint' })
})

app.put('/api/NurseAppointmentSchedule/update_appointment/:AppointmentScheduleId', (c) => {
  return c.json({ message: 'Update appointment endpoint' })
})

app.post('/api/FollowUps', (c) => {
  return c.json({ message: 'Create follow up endpoint' })
})

app.put('/api/FollowUps/:id', (c) => {
  return c.json({ message: 'Update follow up endpoint' })
})

app.delete('/api/FollowUps/:id', (c) => {
  return c.json({ message: 'Delete follow up endpoint' })
})

// Helper endpoints
app.get('/api/HelperUserForm/view_user_form/:formId', (c) => {
  return c.json({ message: 'View user form endpoint' })
})

app.get('/api/HelperMedecineStock/view_all_stock', (c) => {
  return c.json({ message: 'View all medicine stock endpoint' })
})

app.get('/api/HelperClinicStatus/view_all_clinic_status', (c) => {
  return c.json({ message: 'View all clinic status endpoint' })
})

// Admin endpoints
app.delete('/api/AdminUsers/delete/user/:userId', (c) => {
  return c.json({ message: 'Delete user endpoint' })
})

app.delete('/api/AdminPatientRecord/delete/patient_record/:patientRecordId', (c) => {
  return c.json({ message: 'Delete patient record endpoint' })
})

app.post('/api/AdminNurse/register', (c) => {
  return c.json({ message: 'Register nurse endpoint' })
})

app.post('/api/AdminClinicStatus/create/clinic_status', (c) => {
  return c.json({ message: 'Create clinic status endpoint' })
})

app.delete('/api/AdminClinicStatus/delete/clinic_status/:clinicStatusId', (c) => {
  return c.json({ message: 'Delete clinic status endpoint' })
})

export default app