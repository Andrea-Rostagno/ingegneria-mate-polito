---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["hierarchy of infinities", "confronto tra infiniti", "n! e n^n", "esponenziale contro potenza"]
tags: [competenza, area/analisi]
---

# Gerarchia degli infiniti

> All'infinito il fattoriale batte l'esponenziale, l'esponenziale batte ogni potenza e ogni potenza batte il logaritmo: è la scala con cui si sciolgono le forme $\infty/\infty$.

## Definizione / enunciato
Per successioni (Mazzi, es. 1.17, con $\alpha>0$, $b>1$):
$$\lim_n\frac{b^n}{n^\alpha}=+\infty,\qquad \lim_n\frac{n!}{n^\alpha}=+\infty,\qquad \lim_n\frac{b^n}{n!}=0,\qquad \lim_n\frac{n^n}{n!}=+\infty .$$
Per funzioni, per $x\to+\infty$ (Mazzi, es. 1.26 e oss. 1.10): per ogni $\alpha>0$
$$\lim_{x\to+\infty}\frac{e^x}{x^\alpha}=+\infty,\qquad \lim_{x\to+\infty}\frac{\log x}{x^\alpha}=0,$$
cioè $e^x$ ha ordine di infinito superiore a ogni potenza e $\log x$ inferiore a ogni potenza, quindi nessuno dei due ha un ordine di infinito rispetto a $x$.

## Formule chiave
$$\log n\ \ll\ n^\alpha\ \ll\ b^n\ \ll\ n!\ \ll\ n^n\qquad(n\to\infty,\ \alpha>0,\ b>1)$$
dove $f\ll g$ significa $f=o(g)$. (La catena riassume i limiti sopra; il passo $\log n\ll n^\alpha$ è la versione per successioni del limite di $\log x/x^\alpha$.)

## Intuizione
Ogni gradino moltiplica più in fretta del precedente: una potenza aggiunge un fattore che cresce lentamente, l'esponenziale moltiplica sempre per $b$, il fattoriale per fattori sempre più grandi.

## Come si usa
In un rapporto di infiniti si tiene il termine più alto nella scala e si trascurano gli altri (principio di eliminazione). I limiti per successioni si dimostrano con il criterio del rapporto; per funzioni $e^x/x\to+\infty$ segue anche da de l'Hôpital (Mazzi, Calcolo differenziale, oss. 1.13).

## Nei corsi
- **Analisi 1** (triennale): nel programma come "ordine di infinito", usata in tutti gli esercizi sui limiti. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (es. 1.17, pp. 28-29; §1.13.1, oss. 1.10, es. 1.26, pp. 44-45); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§2.2.1).

## Prerequisiti
- [[Criteri del rapporto e della radice per successioni]]: dimostra b^n/n^α→+∞
- [[Ordine di infinitesimo e parte principale]]: ordini di infinito

## Porta a
- Nessuno.

## Collegati
- [[Teorema di de l'Hôpital]]: via alternativa per e^x/x
