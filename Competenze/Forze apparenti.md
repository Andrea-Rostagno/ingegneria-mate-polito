---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["fictitious forces", "forze fittizie", "forza centrifuga", "centrifugal force", "forza di Coriolis", "Coriolis force", "sistemi non inerziali", "non-inertial frames"]
tags: [competenza, area/fisica]
---

# Forze apparenti

> Forze che un osservatore in un sistema non inerziale deve introdurre per salvare la validità di $F=ma$: non derivano da interazioni fondamentali.

## Definizione / enunciato
In un sistema O' accelerato ($\vec a_{OO'}\ne0$) un osservatore misura $\vec F'=m\vec a\,'=m(\vec a-\vec a_{OO'})=\vec F-m\vec a_{OO'}$: compare la forza apparente $-m\vec a_{OO'}$. In un sistema rotante compaiono la **forza centrifuga** $-m\vec\omega\times(\vec\omega\times\vec r\,')$, diretta radialmente verso l'esterno, e la **forza di Coriolis** $-2m\vec\omega\times\vec v\,'$, perpendicolare alla velocità relativa e all'asse di rotazione.

## Formule chiave
$$m\vec a\,'=\vec F-m\vec a_{O'}-m\vec\omega\times(\vec\omega\times\vec r\,')-m\frac{d\vec\omega}{dt}\times\vec r\,'-2m\vec\omega\times\vec v\,'$$

## Intuizione
Sulla piattaforma rotante un oggetto fermo "sente" la centrifuga che bilancia la tensione del filo; tagliato il filo, l'osservatore inerziale vede un moto rettilineo tangente, quello rotante un moto curvilineo che attribuisce a Coriolis.

## Come si usa
- Ascensore che scende con accelerazione $A<g$ (p. 15): per l'osservatore esterno peso meno forza della molla dà $mA$; quello nell'ascensore vede il corpo fermo e deve aggiungere una forza apparente.
- Effetti della rotazione terrestre e accelerazione di Coriolis (p. 38).

## Nei corsi
- **Fisica 1** (triennale): lezione del 30/03/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/MotiRelativi/MotiRelativi_Lezione2.pdf` (pp. 7-15, 34-38).
- **Meccanica** (triennale): nei riferimenti non inerziali $m_i\vec a_i=\vec F_i^{(I)}+\vec F_i^{(E)}-m_i\vec a_\tau(P_i)-2m_i\vec\omega\wedge\vec v_i$ (5.57), con forza di trascinamento $-m_i\vec a_\tau$ e forza di Coriolis $-2m_i\vec\omega\wedge\vec v_i$. La "forza d'inerzia" $-m\vec a$ di un riferimento che trasla con il punto è il punto di partenza del principio di d'Alembert (8.1). Fonti: `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (p. 54, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 79); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Sistemi di riferimento non inerziali", p. 87).

## Prerequisiti
- [[Teorema delle accelerazioni relative]]: termini di trascinamento e Coriolis

## Porta a
- Nessuno.

## Collegati
- [[Trasformazioni galileiane]]: assenti tra sistemi inerziali
- [[Forza centripeta]]: la centrifuga la bilancia nel sistema rotante
