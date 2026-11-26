---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["Rolle's theorem"]
tags: [competenza, area/analisi]
---

# Teorema di Rolle

> Una funzione continua su $[a,b]$, derivabile in $(a,b)$ e con $f(a)=f(b)$ ha almeno un punto interno a derivata nulla.

## Definizione / enunciato
**Teorema 1.2** (Mazzi). Sia $f$ definita su $[a,b]$ chiuso e limitato con
1. $f$ continua su $[a,b]$;
2. $f$ derivabile su $(a,b)$;
3. $f(a)=f(b)$.

Allora esiste $c\in(a,b)$ tale che $f'(c)=0$.

## Formule chiave
Dimostrazione: se $f$ è costante, $f'\equiv0$. Altrimenti per Weierstrass $f$ ha massimo e minimo su $[a,b]$; poiché $f(a)=f(b)$, almeno uno dei due è assunto in un punto $c\in(a,b)$, e per Fermat $f'(c)=0$.

## Intuizione
Se parto e arrivo alla stessa quota con un percorso liscio, da qualche parte ho avuto pendenza orizzontale. Tutte le ipotesi servono: Morandotti (§7.4.1) raccoglie i controesempi.

## Come si usa
Si usa per contare le soluzioni di $f(x)=0$ (tra due zeri di $f$ c'è uno zero di $f'$) e come lemma per Lagrange. Esercizi dell'esercitazione 14 (2022-23): verificare le ipotesi di Rolle per $f(x)=x^3+2x-3$ su $[-1,3]$; se $f$ è continua su $[a,b]$, derivabile due volte e $f(a)=f(b)=f(c)$ con $c\in(a,b)$, dimostrare che esiste $\xi$ con $f''(\xi)=0$ (Rolle applicato due volte).

## Nei corsi
- **Analisi 1** (triennale): "teoremi globali sulle funzioni derivabili: Rolle", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.6, teor. 1.2, p. 16); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.2.1, PDF p. 126; §7.4.1); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_14.pdf` (es. 1-2).

## Prerequisiti
- [[Teorema di Weierstrass]]: esistono max e min
- [[Teorema di Fermat]]: nel punto interno f'=0

## Porta a
- [[Teorema di Lagrange]]: si applica a g

## Collegati
- Nessuno.
