---
tipo: competenza
area: fisica
corsi: [Fisica 1, Chimica]
livello: [triennale]
aliases: ["first law of thermodynamics", "energia interna", "internal energy", "esperimenti di Joule", "Joule's experiments", "equivalenza calore-lavoro", "convenzione sui segni", "trasformazioni reversibili e irreversibili", "trasformazione quasi statica", "lavoro adiabatico", "convenzione chimica sui segni"]
tags: [competenza, area/fisica]
---

# Primo principio della termodinamica

> La variazione di energia interna di un sistema è uguale al calore assorbito meno il lavoro compiuto: calore e lavoro dipendono dalla trasformazione, la loro differenza no.

## Definizione / enunciato
**Esperimenti di Joule:** acqua in un contenitore adiabatico scaldata con un mulinello, una resistenza, una compressione o per strofinio; il lavoro adiabatico speso è sempre proporzionale alla variazione di temperatura, $W_{ad}=C\Delta T$, indipendentemente dal modo. Ciò definisce la funzione di stato **energia interna**: $W_{ad}=-\Delta U$ (lavoro fatto sul sistema). Lo stesso aumento di temperatura si ottiene con uno scambio di calore: $Q=\Delta U$. Equivalenza calore-lavoro.
**Primo principio:** per ogni trasformazione tra gli stati A e B, $Q-W$ dipende solo da A e B:
$$\Delta U=Q-W,\qquad dU=\delta Q-\delta W.$$
Convenzione: $Q>0$ calore assorbito, $W>0$ lavoro compiuto dal sistema. Trasformazione **reversibile**: per stati di equilibrio e senza forze dissipative; **irreversibile** altrimenti (processi naturali).

## Formule chiave
$$\Delta U=Q-W,\qquad \text{ciclo: }\Delta U=0\Rightarrow Q=W,\qquad 1\ \mathrm{cal}=4.186\ \mathrm J$$

## Intuizione
È la conservazione dell'energia estesa al calore: $dU$ è un differenziale esatto, $\delta Q$ e $\delta W$ no.

## Come si usa
Si applica a ogni trasformazione: adiabatica $\Delta U=-W$, isocora $\Delta U=Q$, ciclica $Q=W$ (riassunto in `Termodinamica_Lezione2.pdf` p. 53).

## Nei corsi
- **Fisica 1** (triennale): lezione del 13/05/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione1.pdf` (pp. 14-26).
- **Chimica** (triennale): lezione 17, con la convenzione chimica sui segni $\Delta U=Q+W$ e $W=-P\Delta V$ (lavoro fatto sul sistema positivo), diversa da quella di Fisica 1. Conseguenze: a V costante $\Delta U=Q_V$, a P costante $Q_P=\Delta H$ con $H=U+PV$. Fonte: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 17 - T.chimica T.dinamica.pdf` (lezione 17, pp. 17-20).

## Prerequisiti
- [[Principio zero della termodinamica]]: stati di equilibrio e temperatura
- [[Conservazione dell'energia meccanica]]: estende il bilancio energetico al calore

## Porta a
- [[Energia interna di un gas ideale]]: ΔU = Q - W applicato alle trasformazioni
- [[Macchina termica]]: in un ciclo Q = W
- [[Entalpia di reazione]]: il calore a P costante è ΔH

## Collegati
- [[Lavoro termodinamico]]: W compare nel bilancio ΔU = Q - W
