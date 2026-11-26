---
tipo: competenza
area: fisica
corsi: [Fisica 1, Fisica 2]
livello: [triennale]
aliases: ["electrostatic field", "electric field", "campo elettrico", "legge di Coulomb", "Coulomb's law", "forza di Coulomb", "principio di sovrapposizione", "superposition principle", "costante dielettrica del vuoto"]
tags: [competenza, area/fisica]
---

# Campo elettrostatico

> Campo vettoriale generato da cariche ferme: in ogni punto è la forza di Coulomb per unità di carica di prova.

## Definizione / enunciato
**Legge di Coulomb:** due cariche puntiformi si attraggono o respingono (a seconda dei segni) con forza centrale proporzionale al prodotto delle cariche e a $1/r^2$. Il campo elettrostatico di una carica $Q$ è la forza agente su una carica di prova $q_0$ (molto piccola) divisa per $q_0$. Linee di forza uscenti dalle cariche positive ed entranti in quelle negative.
**Principio di sovrapposizione:** il campo di più cariche è la somma vettoriale dei campi; per una distribuzione continua si integra sui contributi infinitesimi $dq$.

## Formule chiave
$$\vec F_E=\frac{1}{4\pi\varepsilon_0}\frac{q_0q}{r^2}\hat r,\qquad \vec E=\frac{\vec F_e}{q_0}=K\frac{Q}{r^2}\hat u_r,\qquad K=\frac{1}{4\pi\varepsilon_0}\approx9\cdot10^9\ \mathrm{N\,m^2/C^2}$$
$$\vec E=\vec E_1+\vec E_2+\vec E_3,\qquad \vec E=K\int_Q\frac{dq}{r^2}\hat u_r$$

## Intuizione
Formalmente identico al campo gravitazionale (massa al posto di carica, $K$ al posto di $\gamma$), ma la carica ha due segni e la forza è enormemente più intensa.

## Come si usa
Esercizio (`Gravitazione_elesttrostatica_Lezione2.pdf` p. 39): componenti e modulo del campo generato da una carica $q_1=-2\cdot10^{-9}$ C in un punto P a distanza nota.

## Nei corsi
- **Fisica 1** (triennale): lezione dell'1/06/2022, parte di elettrostatica nel vuoto. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Elettrostatica_gravitazione/Gravitazione_elettrostatica_Lezione1.pdf` (pp. 26-41); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Elettrostatica_gravitazione/Gravitazione_elesttrostatica_Lezione2.pdf` (pp. 38-39).
- **Fisica 2** (triennale): prima lezione di elettrostatica. Coulomb $\vec F=k_e\frac{qq'}{r^2}\hat u_r$ con $k_e=10^{-7}c^2=8{,}9874\cdot10^9$ N m² C⁻² (fissato $k_e$ resta definito il coulomb) e $k_e=\frac{1}{4\pi\varepsilon_0}$, $\varepsilon_0=\frac{10^7}{4\pi c^2}=8{,}854\cdot10^{-12}$; per due protoni $F_E/F_G=\frac{e^2}{4\pi\varepsilon_0Gm_p^2}\approx1{,}24\cdot10^{36}$; campo di una distribuzione continua $\vec E(P)=\frac{1}{4\pi\varepsilon_0}\int\frac{\rho\,dV'}{|\vec r-\vec r'|^2}\hat u_{r'}$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/5. LEZIONE.pdf` (pp. 4-16).

## Prerequisiti
- Nessuno.

## Porta a
- [[Teorema di Gauss del flusso]]: campo con dipendenza 1/r²
- [[Potenziale elettrostatico]]: il lavoro del campo per unità di carica definisce V
- [[Polarizzazione dei dielettrici]]: il campo esterno sposta o orienta le cariche legate
- [[Corrente elettrica]]: le cariche libere si muovono sotto l'azione di E

## Collegati
- [[Legge di gravitazione universale]]: stessa dipendenza 1/r², analogie e differenze
- [[Forza centrale]]: la forza di Coulomb è centrale e conservativa
- [[Legame ionico]]: attrazione tra ioni secondo la legge di Coulomb
- [[Legge di Ampère-Laplace]]: B = v × E / c² per la stessa carica
