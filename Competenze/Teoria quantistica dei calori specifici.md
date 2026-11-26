---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["quantum theory of specific heats", "calore specifico dei solidi", "modello di Einstein dei solidi", "Einstein solid", "calore specifico dell'idrogeno molecolare", "congelamento dei gradi di libertà"]
tags: [competenza, area/fisica]
---

# Teoria quantistica dei calori specifici

> L'equipartizione prevede $c_V$ costanti ($\frac72R$ per H₂, $3R$ per un solido); i dati dipendono da $T$ e si spiegano quantizzando rotazione e vibrazione: un grado di libertà contribuisce solo se l'energia termica basta a superare il primo salto di livello.

## Definizione / enunciato
**Classico:** per equipartizione ogni termine quadratico dell'energia dà $\frac12kT$; per una mole di H₂ (3 traslazionali, 2 rotazionali, 2 vibrazionali per molecola) $c_V=\frac72R$, per un solido $c_V=3R$, indipendenti da $T$. Sperimentalmente $c_V/R$ per l'idrogeno sale a gradini $\frac32\to\frac52\to\frac72$, e per un solido cristallino tende a 3 solo ad alta $T$.
**Quantistico (H₂):** $E=E_{TR}+E_{ROT}+E_{VIBR}$, con traslazione praticamente continua, rotazione $E_{ROT}=L^2/2I$ e vibrazione $E_{VIBR}=nh\nu$. Le pareti a temperatura $T$ cedono per urto al massimo circa l'energia termica: il grado di libertà si "attiva" quando questa raggiunge $\Delta E_{min}$.
**Modello di Einstein:** ogni atomo del solido oscilla a frequenza $\omega$ come tre oscillatori armonici indipendenti, con l'energia media dell'oscillatore di Planck.

## Formule chiave
$$c_V=\frac{\delta Q}{dT}=\frac{dU}{dT},\qquad c_V=\frac12k(3N_A+2N_A+2N_A)=\frac72R,\qquad E=\frac{\hbar^2\pi^2}{2Ma^2}n^2+\frac{\hbar^2}{2I}l(l+1)+j\hbar\omega$$
$$I=M\left(\frac d2\right)^2,\quad d=0{,}09\ \text{nm};\qquad k=-\frac{e^2}{2\pi\varepsilon_0r_0^3}\approx4\cdot10^2\ \frac{Nw}{m},\quad \omega=\sqrt{\frac{k}{m_{nucl.}}}\approx4\cdot10^{14}\ \text{Hz}\Rightarrow\nu\approx6\cdot10^{13}\ \text{Hz}$$
$$\langle E\rangle_{atomo}=\frac{3\hbar\omega}{e^{\hbar\omega/k_BT}-1},\qquad U=N_A\left[\frac{3\hbar\omega}{e^{\hbar\omega/k_BT}-1}\right],\qquad C_V=\frac{3N_Ak_Be^{\hbar\omega/k_BT}\left(\frac{\hbar\omega}{k_BT}\right)^2}{\left(e^{\hbar\omega/k_BT}-1\right)^2}$$

## Intuizione
I gradi di libertà con salti di energia grandi rispetto all'energia termica sono "congelati". Per H₂ la traslazione è sempre attiva ($\frac32R$), la rotazione si attiva a decine di kelvin ($\frac52R$), la vibrazione solo a migliaia di kelvin ($\frac72R$).

## Come si usa
Si confronta l'energia termica con $\Delta E_{min}$ di rotazione e vibrazione. Le due lezioni danno valori diversi, da segnalare:
- `46&49&50` (soglia $kT\approx\Delta E$, livelli $E_{ROT}=n^2\hbar^2/2I$ alla Bohr): $I=6{,}9\cdot10^{-48}$ kg m² (p. 21), $\Delta E_{min}=5\cdot10^{-3}$ eV e $0{,}25$ eV (p. 25), rotazione a circa **60 K** e vibrazione a circa **2850 K** (pp. 26-27).
- `57&58` (soglia $\frac32kT\approx\Delta E$, pareti di gas monoatomico, $E_{ROT}=l(l+1)\hbar^2/2I$): $I=6{,}7\cdot10^{-48}$ kg m² (p. 40), $\Delta E_{min}=1{,}6\cdot10^{-21}$ J e $3{,}9\cdot10^{-20}$ J (p. 44), rotazione a circa **70 K** e vibrazione a circa **1950 K** (pp. 45-46).
Discrepanze interne da verificare sul PDF: 0,025 eV vale $2\cdot10^{-21}$ J a `46` p. 23 e $4\cdot10^{-21}$ J a p. 26; 0,038 eV vale $6{,}2\cdot10^{-21}$ J a `57` p. 42 e $3{,}8\cdot10^{-21}$ J a p. 45.

## Nei corsi
- **Fisica 2** (triennale): due versioni quasi uguali; la prima include il modello di Einstein dei solidi. Le pagine reali in `46&49&50` sono 17-31 (la mappa indica 9-33). Fonti: `triennale/ANNO 2/fisica 2/lezioni/46&49&50. LEZIONE.pdf` (pp. 17-31); `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (pp. 36-46).

## Prerequisiti
- [[Equipartizione dell'energia]]: previsione classica cV = 7R/2 e 3R
- [[Quantizzazione dell'energia e fotoni]]: energia media dell'oscillatore di Planck

## Porta a
- Nessuno.

## Collegati
- [[Calorimetria]]: calore specifico molare a volume costante
