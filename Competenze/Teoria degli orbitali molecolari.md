---
tipo: competenza
area: fisica
corsi: [Chimica]
livello: [triennale]
aliases: ["molecular orbital theory", "teoria MO", "MO theory", "LCAO", "combinazione lineare di orbitali atomici", "orbitale di legame", "orbitale di antilegame", "bonding orbital", "antibonding orbital", "ordine di legame", "bond order", "HOMO", "LUMO"]
tags: [competenza, area/fisica]
---

# Teoria degli orbitali molecolari

> Gli elettroni di una molecola occupano orbitali molecolari estesi su tutti i nuclei, ottenuti come combinazione lineare degli orbitali atomici; l'ordine di legame si calcola dagli elettroni leganti e antileganti.

## Definizione / enunciato
Nella teoria MO gli elettroni non appartengono più ai singoli atomi ma sono ridistribuiti in **orbitali molecolari** policentrici. Quando due atomi si legano, i loro orbitali atomici di valenza si combinano in altrettanti orbitali molecolari: $n$ AO danno $n$ MO, metà di legame e metà di antilegame (se dispari, uno di non legame).
**LCAO:** l'MO è la combinazione lineare degli AO. La somma (interferenza costruttiva, AO in fase) dà l'**orbitale di legame**, a energia minore, con densità elettronica accresciuta tra i nuclei; la differenza dà l'**orbitale di antilegame** (*), a energia maggiore, con un piano nodale tra i nuclei. Condizioni: energie simili, buona sovrapposizione, stessa simmetria rispetto all'asse.
Gli MO si riempiono con Aufbau, Pauli e Hund. HOMO: ultimo MO occupato; LUMO: primo vuoto.

## Formule chiave
$$\Psi=\psi_A+\psi_B,\qquad \Psi^*=\psi_A-\psi_B,\qquad \Psi^2=\psi_A^2+\psi_B^2+2\psi_A\psi_B$$
$$OL=\frac{n_e-n_e^*}{2}$$

## Intuizione
Il termine $2\psi_A\psi_B$ (integrale di sovrapposizione) è positivo negli MO di legame, negativo in quelli di antilegame, nullo in quelli di non legame. Il legame esiste se gli elettroni leganti superano gli antileganti.

## Come si usa
$\mathrm{H_2}$: $OL=(2-0)/2=1$. $\mathrm{He_2}$: $OL=0$, non esiste; $\mathrm{He_2^+}$: 0,5. $\mathrm{O_2}$: $(\sigma_{2s})^2(\sigma^*_{2s})^2(\sigma_{2p})^2(\pi_{2p})^4(\pi^*_{2p})^2$, $OL=2$ con due elettroni spaiati nei π*: la molecola è paramagnetica, come si osserva, cosa che né Lewis né VB spiegano. CO: OL = 3. Per B, C, N si inverte l'ordine dei livelli σ e π.

## Nei corsi
- **Chimica** (triennale): Lezione 10. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 10 - Legame chimico (II).pdf` (lezione 10, pp. 25-46).

## Prerequisiti
- [[Equazione di Schrödinger]]: soluzioni approssimate per le molecole
- [[Teoria del legame di valenza]]: supera i limiti della VB (paramagnetismo di O2)

## Porta a
- [[Legame metallico]]: le bande nascono da moltissimi orbitali molecolari

## Collegati
- [[Configurazione elettronica]]: Aufbau, Pauli e Hund anche negli MO
- [[Regola dell'ottetto]]: l'ottetto riempie gli orbitali leganti
