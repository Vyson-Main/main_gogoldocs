# Technical Debt

| ID | Debt Item | Description | Impact | Priority |
|----|-----------|-------------|---------|----------|
| TD-001 | Duplicate validation logic | Multiple files repeat the same validation code | Harder maintenance | High |
| TD-002 | Poor variable naming | Some variables use unclear names like data1, tempVal | Reduced readability | Medium |
| TD-003 | Large controller functions | Backend controllers handle too many responsibilities | Difficult debugging | High |
| TD-004 | Missing error handling | Some API routes lack proper try-catch blocks | Risk of crashes | High |
| TD-005 | Hardcoded configuration values | Database URLs and ports are directly written in code | Difficult deployment | Medium |
