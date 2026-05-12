# QA Plan

## Test Levels

### 1. Unit Testing
Tests individual functions, modules, and components independently.

### 2. Integration Testing
Tests interaction between modules such as API routes, database connections, and authentication.

### 3. System Testing
Tests the complete AttendTrack system as a whole in a simulated production environment.

---

# Entry Criteria

Testing may begin when:
- Requirements are documented
- Development environment is configured
- Source code is committed to repository
- Test cases are prepared
- Dependencies are installed successfully

---

# Exit Criteria

Testing is complete when:
- All critical and major defects are resolved
- All planned tests are executed
- Pass rate reaches at least 90%
- No unresolved Severity 1 defects remain
- QA approval is completed

---

# Severity Levels

| Severity | Description |
|----------|-------------|
| S1 - Critical | System crash, data loss, or security failure |
| S2 - Major | Major feature malfunction with no workaround |
| S3 - Minor | Minor issue with workaround available |
| S4 - Low | Cosmetic/UI issue with minimal impact |

---

# Testing Framework

## Selected Framework
- Backend: Jest
- Frontend: Vitest

---

# Test Responsibilities

| Role | Responsibility |
|------|----------------|
| QA Lead | Oversees testing activities |
| Developers | Write and maintain unit tests |
| Project Manager | Reviews QA reports |
| DevOps Lead | Maintains CI/CD test execution |
