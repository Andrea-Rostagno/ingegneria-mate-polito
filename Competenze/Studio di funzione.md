---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["curve sketching", "grafico qualitativo", "studio del grafico"]
tags: [competenza, area/analisi]
---

# Studio di funzione

> La procedura che mette insieme dominio, simmetrie, limiti, asintoti, derivata prima e seconda per disegnare il grafico qualitativo di una funzione.

## Definizione / enunciato
Algoritmo 4.4.2 di Morandotti (scaletta):
1. **Dalla funzione $f$**: dominio; segno; intersezioni con gli assi; parità; continuità e discontinuità; limiti agli estremi del dominio e **asintoti** (orizzontali, verticali, obliqui, def. 4.4.1).
2. **Dalla derivata prima**: dominio di $f'$ e punti di non derivabilità (angolosi, cuspidi, tangenti verticali); segno di $f'$, intervalli di monotonia, punti di massimo e minimo locali e globali.
3. **Dalla derivata seconda**: segno di $f''$, intervalli di convessità e concavità, flessi.
4. Grafico qualitativo coerente con tutte le informazioni.

## Formule chiave
$$m=\lim_{x\to\pm\infty}\frac{f(x)}x,\quad q=\lim_{x\to\pm\infty}(f(x)-mx);\qquad f'\gtrless0\ \Rightarrow\ \nearrow/\searrow;\qquad f''\gtrless0\ \Rightarrow\ \text{convessa/concava}$$

## Intuizione
Ogni passo aggiunge un vincolo al disegno: i limiti fissano il comportamento ai bordi, $f'$ la forma su e giù, $f''$ la curvatura. Le informazioni devono essere coerenti tra loro: è anche un controllo dei calcoli.

## Come si usa
È l'esercizio tipico della prova scritta. Esercizi tipo: esercitazioni 18-19 (2021-22, "studio di funzione", con svolgimenti), esercitazione 15 (2022-23, "studi di funzione"), esercitazione 17 (2021-22, "domini, limiti e derivate"). Spesso l'esercizio chiede anche il numero di soluzioni di $f(x)=k$ al variare di $k$, che si legge dal grafico grazie al teorema dei valori intermedi.

## Nei corsi
- **Analisi 1** (triennale): applicazione di tutto il calcolo differenziale. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§4.4, def. 4.4.1, alg. 4.4.2, PDF pp. 160-162); `triennale/ANNO 1/analisi 1/Esercitazioni 2021-22 (manoscritte e svolte)/ESERCITAZIONE 18 - STUDIO DI FUNZIONE - 01-12-21.pdf` e `ESERCITAZIONE 19 - STUDIO DI FUNZIONE - 02-12-21.pdf` (scansioni); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_15.pdf`.

## Prerequisiti
- [[Asintoti]]: comportamento agli estremi
- [[Punti di estremo locale]]: massimi e minimi
- [[Funzione convessa]]: concavità e flessi
- [[Punti di non derivabilità]]: punti angolosi e cuspidi

## Porta a
- Nessuno.

## Collegati
- Nessuno.
