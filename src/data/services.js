export const LAYERS = [
  { num: '01', title: 'Visual Visibility', desc: 'Real-time 360° cameras eliminate blind spots, giving remote teams complete situational awareness of every zone.', chips: [
    ['360° Cameras', 'Full-sphere live views of every zone — walk the site remotely with no blind spots.'],
    ['PTZ & Fixed CCTV', 'Your existing camera infrastructure streams directly into the twin.'],
    ['Thermal Imaging', 'Heat-signature views for equipment health and perimeter monitoring.'],
    ['Remote Walkthroughs', 'Navigate the facility from anywhere, as if you were on site.'],
    ['Multi-Site View', 'Every zone of every facility, side by side in one command center.'],
  ]},
  { num: '02', title: 'Digital Asset Tagging', desc: 'Every asset carries its documentation, instantly accessible in spatial context — no more hunting through filing cabinets.', chips: [
    ['O&M Manuals', 'Operation & maintenance manuals attached to each asset, in place.'],
    ['3D Models', 'Dimensional models of equipment for planning, clash-checks and training.'],
    ['P&IDs', 'Piping & instrumentation diagrams linked to the live equipment they describe.'],
    ['Safety Datasheets', 'Hazard and safety data one click away from the asset itself.'],
    ['Maintenance History', 'Full service record and warranty status per asset.'],
  ]},
  { num: '03', title: 'Live Data Integration', desc: 'Operational and enterprise systems unify into one live picture — no more swivel-chair operations across siloed dashboards.', chips: [
    ['SCADA', 'Supervisory control and data acquisition streams, live on the twin.'],
    ['BMS', 'Building management systems — HVAC, lighting and access — in spatial context.'],
    ['EMS', 'Energy monitoring for consumption and efficiency tracking.'],
    ['CMMS', 'Maintenance workflows triggered directly from what the twin sees.'],
    ['WMS', 'Warehouse management data mapped to physical space.'],
    ['MES', 'Manufacturing execution data shown in production context.'],
    ['CRM', 'Customer and tenant context, where operations touch service.'],
    ['ERP', 'Enterprise resource planning tied back to physical operations.'],
  ]},
  { num: '04', title: 'IoT Integration', desc: 'A full sensor layer overlays live on the twin, built on open protocols — Modbus, BACnet, MQTT, LoRaWAN. 17+ sensor types supported.', chips: [
    ['Temperature', 'Ambient and equipment temperature, monitored continuously.'],
    ['Humidity', 'Environmental humidity for sensitive spaces and archives.'],
    ['Water Leak', 'Early leak detection under floors and around critical equipment.'],
    ['Voltage', 'Supply voltage quality across panels and feeders.'],
    ['Current', 'Load current per circuit for capacity and fault insight.'],
    ['Energy', 'Metered consumption for cost and efficiency tracking.'],
    ['Dry Contact', 'Status of doors, panels and legacy equipment contacts.'],
    ['Air Flow', 'Ventilation performance across ducts and rooms.'],
    ['Motion', 'Occupancy and movement across zones.'],
    ['Pressure', 'Line and room pressure for process and HVAC systems.'],
    ['Door Open/Close', 'Entry point status, logged and alarmed.'],
    ['Smoke', 'Early smoke detection wired into the twin’s alerting.'],
    ['Vibration', 'Early bearing and motor fault signatures on rotating equipment.'],
    ['Air Quality', 'CO2, particulates and VOC levels for healthy spaces.'],
    ['CRAC', 'Computer-room air conditioning health for data halls.'],
    ['Generator', 'Standby generator status, fuel and run-state.'],
    ['UPS', 'Uninterruptible power supply health and battery state.'],
    ['Relay Output', 'Remote switching and control outputs from the twin.'],
  ]},
  { num: '05', title: 'AI Intelligence', desc: 'A growing library of AI video-analytics algorithms turns cameras into proactive monitors. Click an algorithm to see what it does.', chips: [
    ['Face Recognition — Watchlist', 'Identifies persons of interest in a crowd against a predefined list. Up to 99.85% benchmark accuracy; integrates with leading VMS like Genetec and Milestone.'],
    ['Face Recognition — Auto-Enroll', 'Builds a dynamic face database automatically from existing camera feeds — with BI on peak hours, returning visitors, occupancy and dwell time.'],
    ['Vehicle ID & Tracking', 'Real-time license-plate recognition across multi-lane traffic. Search by plate, make, model or color. Up to 99.6% accuracy.'],
    ['Perimeter Intrusion', 'Monitors and alerts on unauthorized entry attempts across site perimeters.'],
    ['Slip & Fall', 'Analyzes 5-second video segments to catch real falls and filter out lying down or crawling. Up to 99.1% accuracy.'],
    ['Smoke & Fire', 'Early visual detection of smoke and fire hazards for rapid response. Up to 98.5% accuracy.'],
    ['Aggressive Behavior', 'Detects fights, brawls, assault and vandalism in individuals or groups — no tuning needed. Up to 96% accuracy.'],
    ['Suspicious Shopping', 'Detect–segment–assess pipeline flags concealment behavior in retail environments. Up to 97% accuracy.'],
    ['Abandoned Object', 'Identifies unattended items and alerts security personnel immediately.'],
    ['Weapon & Mask Detection', 'Detects guns, knives and robbery masks so operators can be proactive, not reactive.'],
  ]},
]

export const LAYER_ICONS = [
  'M2 7 H14 V17 H2 Z M14 10 L22 7 V17 L14 14',
  'M3 3 H11 L21 13 L13 21 L3 11 Z M7.5 7.5 H7.51',
  'M12 3 C7.6 3 4 4.3 4 6 C4 7.7 7.6 9 12 9 C16.4 9 20 7.7 20 6 C20 4.3 16.4 3 12 3 Z M4 6 V18 C4 19.7 7.6 21 12 21 C16.4 21 20 19.7 20 18 V6 M4 12 C4 13.7 7.6 15 12 15 C16.4 15 20 13.7 20 12',
  'M2 9 C8 3.5 16 3.5 22 9 M5.5 12.5 C9.5 9 14.5 9 18.5 12.5 M9 16 C11 14.5 13 14.5 15 16 M12 19.5 H12.01',
  'M9 3 V6 M15 3 V6 M9 18 V21 M15 18 V21 M3 9 H6 M3 15 H6 M18 9 H21 M18 15 H21 M6 6 H18 V18 H6 Z M9.5 9.5 H14.5 V14.5 H9.5 Z',
]

export const OT_STEPS = [
  { num: '01', label: '01 DISCOVER', title: 'Discover', desc: 'Gain advanced asset visibility across IT, OT and IoT — through PCAP, deep packet inspection, logs, configuration and unstructured data processing.' },
  { num: '02', label: '02 PREVENT', title: 'Prevent', desc: 'Achieve significant risk reduction through proactive attack-path analysis, vulnerability management and consequence-based risk assessments (CoBRA).' },
  { num: '03', label: '03 DETECT', title: 'Detect', desc: 'Prevent known threats with signatures and unknown threats with AI/ML anomaly detection — and break the attack kill chain.' },
  { num: '04', label: '04 REMEDIATE', title: 'Remediate', desc: 'Act on detected attacks with controlled playbooks aligned to the MITRE ATT&CK framework for OT, IoT and IIoXT.' },
]
export const OT_NODE_POS = [
  ['13%', '50%'],
  ['50%', '82%'],
  ['87%', '50%'],
  ['50%', '18%'],
]

export const OT_CHIPS = [
  ['24/7 OT SOC', 'Global OT security operations centers with managed monitoring, response and reporting — around the clock.'],
  ['Asset Visibility', 'Advanced IT, OT & IoT asset discovery and inventory — the foundation of every security program.'],
  ['Vulnerability Management', 'Proactive attack-path analysis with prioritized, OT-safe remediation.'],
  ['Micro-Segmentation', 'Virtual network zoning to contain threats and minimize malware propagation.'],
  ['Threat Intel & Honeypots', 'Feeds from a honeypot network spanning 75+ cities, capturing 12M+ attacks per day.'],
  ['Anomaly Detection', 'AI/ML behavioral monitoring that catches unknown threats and process anomalies.'],
  ['Secure Remote Access', 'Trusted, least-privilege remote access into industrial environments.'],
  ['Media File Scanning', 'Scan portable media and files for malicious content with advanced CDR and reverse engineering.'],
  ['Incident Response', 'IR readiness assessments, tabletop (TTX) and simulation (SIMEX) exercises, and response retainers.'],
  ['Compliance & Risk', 'Consequence-based risk assessments, OT cyber maturity assessments and audit-ready evidence.'],
  ['OT Security Training', 'Adaptive, contextualized OT security learning paths for operators and engineers.'],
]

export const IOT_NODES = [
  { top: '23%', left: '17%', glyph: '°C', label: 'TEMP' },
  { top: '77%', left: '30%', glyph: 'H2O', label: 'LEAK' },
  { top: '18%', left: '47%', glyph: 'MOT', label: 'MOTION' },
  { top: '23%', left: '71%', glyph: 'PSI', label: 'PRESSURE' },
  { top: '75%', left: '76%', glyph: 'SMK', label: 'SMOKE' },
  { top: '48%', left: '89%', glyph: 'kV', label: 'VOLTAGE' },
]
export const IOT_LINE_ENDPOINTS = [
  [120, 70], [210, 230], [330, 55], [500, 70], [530, 225], [620, 145],
]

export const INDUSTRIES = [
  { name: 'Schools & Universities', icon: 'M12 4 L22 9 L12 14 L2 9 Z M6 11.5 V16 C6 17.5 9 19 12 19 C15 19 18 17.5 18 16 V11.5 M22 9 V14' },
  { name: 'Hotels', icon: 'M3 6 V18 M3 13 H21 M21 18 V11 A2 2 0 0 0 19 9 H10 V13 M6 10.5 A1.5 1.5 0 1 0 6.01 10.5' },
  { name: 'Hospitals', icon: 'M5 21 V5 A2 2 0 0 1 7 3 H17 A2 2 0 0 1 19 5 V21 H5 Z M12 7 V13 M9 10 H15 M10 21 V17 H14 V21' },
  { name: 'Communities', icon: 'M2 20 V12 L7 8 L12 12 V20 H2 Z M12 20 H22 V10 L17 6 L14 8.4' },
  { name: 'Malls', icon: 'M6 8 H18 L19.5 21 H4.5 Z M9 11 V6 A3 3 0 0 1 15 6 V11' },
  { name: 'Utilities', icon: 'M13 2 L5 13 H11 L9 22 L19 9 H13 Z' },
  { name: 'Manufacturing', icon: 'M3 21 V10 L9 13 V10 L15 13 V21 H3 Z M15 21 H21 V6 H17 V13 M6 17 H9' },
  { name: 'Airports', icon: 'M22 2 L11 13 M22 2 L15 21 L11 13 L3 9 Z' },
  { name: 'Ports', icon: 'M12 8 V22 M9.5 5.5 A2.5 2.5 0 1 0 14.51 5.5 A2.5 2.5 0 1 0 9.5 5.5 M5 12 H3 C3 17 7 21 12 22 C17 21 21 17 21 12 H19' },
  { name: 'Data Centers', icon: 'M4 4 H20 V10 H4 Z M4 14 H20 V20 H4 Z M7 7 H7.01 M7 17 H7.01' },
  { name: 'Pump Rooms', icon: 'M12 3 C8 8 6 11 6 14 A6 6 0 0 0 18 14 C18 11 16 8 12 3 Z' },
  { name: 'Substations', icon: 'M4 4 H20 V20 H4 Z M13 7 L9 13 H12 L11 17 L15 11 H12 Z' },
]
