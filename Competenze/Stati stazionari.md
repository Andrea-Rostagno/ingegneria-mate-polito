---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["stationary states", "equazione di Schrödinger indipendente dal tempo", "time-independent Schrödinger equation", "equazione di Schrödinger stazionaria", "autovalori dell'energia", "energy eigenvalues", "separazione delle variabili tempo-spazio", "soluzione generale dell'equazione di Schrödinger"]
tags: [competenza, area/fisica]
---

# Stati stazionari

> Se l'hamiltoniana non dipende dal tempo, l'equazione di Schrödinger si separa: le soluzioni $e^{-iEt/\hbar}\psi_E(\vec x)$ hanno densità di probabilità costante e ogni soluzione è una loro sovrapposizione.

## Definizione / enunciato
Con $H$ indipendente dal tempo si cerca $\psi(\vec x,t)=f(t)\psi(\vec x)$. Separando, $\frac{i\hbar}{f}\partial_tf=\frac{1}{\psi}H\psi=E$ costante, quindi
$$f(t)=e^{-iEt/\hbar},\qquad H\psi(\vec x)=E\psi(\vec x).$$
La seconda è l'**equazione di Schrödinger indipendente dal tempo**: un'equazione agli autovalori per $H$ (in pratica un'equazione differenziale, per la presenza dell'energia cinetica). Le soluzioni $e^{-iEt/\hbar}\psi_E(\vec x)$ sono gli **stati stazionari**.

## Formule chiave
$$\left(-\frac{\hbar^2}{2m}\nabla^2+U(\vec x)\right)\psi_E=E\psi_E$$
$$\psi(\vec x,t)=\sum_nC(E_n)e^{-iE_nt/\hbar}\psi_{E_n}(\vec x)\quad\text{(spettro discreto)},\qquad \psi(\vec x,t)=\int_DdE\,C(E)e^{-iEt/\hbar}\psi_E(\vec x)\quad\text{(continuo)}$$
Valor medio dell'energia: $\langle E\rangle=\sum_n|C(E_n)|^2E_n$, indipendente dal tempo.

## Intuizione
Uno stato stazionario cambia nel tempo solo per una fase globale, quindi $|\psi|^2$ e i valori medi non evolvono. L'evoluzione non banale nasce dall'interferenza tra componenti di energie diverse.

## Come si usa
Esempi della dispensa: onde piane della particella libera, $E=\hbar^2k^2/2m$ (pp. 48, 60); stati dell'oscillatore armonico; atomo di idrogeno. In QM_notes, per la buca infinita, lo stato iniziale si sviluppa in serie di Fourier delle autofunzioni $\psi_n$ e ogni coefficiente acquista la sua fase $e^{-iE_nt/\hbar}$ (`QM_notes3.pdf` pp. 11-16). In una base qualunque il problema diventa il sistema lineare $i\hbar\dot c_n=\sum_mH_{nm}c_m$ (`2022_QP.pdf` p. 132).

## Nei corsi
- **Quantum physics** (triennale): §4.4 e §5.5 della dispensa di V. Penna; §1.3 delle note di M. Re Fiorentin. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 43, 68, 75-76); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 9-16).

## Prerequisiti
- [[Equazione di Schrödinger]]: si separa la dipendenza dal tempo
- [[Autovalori e autovettori]]: l'equazione stazionaria è un problema agli autovalori

## Porta a
- [[Operatore di evoluzione temporale]]: $e^{-itH/\hbar}$ agisce su ogni stato stazionario come una fase
- [[Particella in una scatola]]: primo esempio di spettro discreto
- [[Teorema spin-statistica]]: gli autostati di H si simmetrizzano mantenendo l'energia

## Collegati
- [[Misura in meccanica quantistica]]: $|C(E_n)|^2$ è la probabilità di misurare $E_n$
- [[Base di onde piane]]: autostati dell'hamiltoniana libera
