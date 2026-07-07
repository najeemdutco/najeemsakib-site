export const HOME_LAYERS = [
  { num: '01', title: 'Visual Visibility', icon: 'M2 7 H14 V17 H2 Z M14 10 L22 7 V17 L14 14', desc: 'Real-time 360° cameras eliminate blind spots, giving remote teams complete situational awareness of every zone.' },
  { num: '02', title: 'Asset Tagging', icon: 'M3 3 H11 L21 13 L13 21 L3 11 Z M7.5 7.5 H7.51', desc: 'Every asset carries its manuals, 3D models, P&IDs and safety data, instantly accessible in spatial context.' },
  { num: '03', title: 'Live Data', icon: 'M12 3 C7.6 3 4 4.3 4 6 C4 7.7 7.6 9 12 9 C16.4 9 20 7.7 20 6 C20 4.3 16.4 3 12 3 Z M4 6 V18 C4 19.7 7.6 21 12 21 C16.4 21 20 19.7 20 18 V6 M4 12 C4 13.7 7.6 15 12 15 C16.4 15 20 13.7 20 12', desc: 'SCADA, BMS and EMS streams unify into one live operational picture — alongside CMMS, WMS, MES, CRM and ERP.' },
  { num: '04', title: 'IoT Sensors', icon: 'M2 9 C8 3.5 16 3.5 22 9 M5.5 12.5 C9.5 9 14.5 9 18.5 12.5 M9 16 C11 14.5 13 14.5 15 16 M12 19.5 H12.01', desc: 'A full sensor layer overlays live on the twin, built on open protocols: Modbus, BACnet, MQTT, LoRaWAN.' },
  { num: '05', title: 'AI Intelligence', icon: 'M9 3 V6 M15 3 V6 M9 18 V21 M15 18 V21 M3 9 H6 M3 15 H6 M18 9 H21 M18 15 H21 M6 6 H18 V18 H6 Z M9.5 9.5 H14.5 V14.5 H9.5 Z', desc: 'Facial recognition, vehicle ID and a growing library of behavioral and safety analytics automate monitoring.' },
]

/** 3D positions (within the MEP-room stage) each layer's hotspot/pop-up sits at. */
export const HOME_LAYER_HOTSPOTS = [
  [2.6, 1.1, 0.6], // 01 visual — camera near ceiling
  [1.1, 0.35, 1.4], // 02 asset tag — AHU
  [-1.6, -0.2, 0.2], // 03 live data — SCADA panel
  [-0.4, -0.55, 1.2], // 04 IoT — pump sensor
  [0.55, 0.75, 1.8], // 05 AI — person-scan frame
]

export const HOME_LAYER_POPUPS = [
  '360° CAM · LIVE',
  'AHU-01 · O&M DOCS',
  'SCADA · 6.2 BAR',
  'PUMP · 23.4°C ✓',
  'AI · PERSON OK',
]

export const NETWORK_SITES = [
  { label: 'HOSPITAL', angle: -55, radius: 8 },
  { label: 'UTILITY PLANT', angle: -155, radius: 8.5 },
  { label: 'SUBSTATION', angle: 40, radius: 8.2 },
  { label: 'AIRPORT', angle: 205, radius: 8 },
  { label: 'DATA CENTER', angle: 115, radius: 8.4 },
  { label: 'MALL', angle: 155, radius: 7.8 },
]
