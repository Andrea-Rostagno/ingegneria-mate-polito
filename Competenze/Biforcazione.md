---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["bifurcation", "biforcazioni", "biforcazione transcritica", "transcritical bifurcation", "biforcazione a forcone", "pitchfork bifurcation", "biforcazione sella-nodo", "saddle-node bifurcation", "biforcazione di Hopf", "Hopf bifurcation", "raddoppio del periodo", "period doubling", "biforcazioni di codimensione 1"]
tags: [competenza, area/analisi]
---

# Biforcazione

> Cambiamento qualitativo della dinamica (nascita, scomparsa o cambio di stabilità di punti fissi e orbite periodiche) quando un parametro attraversa un valore critico.

## Definizione / enunciato
Si studia $\dot x=f(x;\mu)$ (o $x_{n+1}=F_\mu(x_n)$) al variare del parametro $\mu$. Nel punto di biforcazione la derivata (o un autovalore della jacobiana) attraversa il valore critico: per le mappe, la pendenza $\frac{dF^n}{dx}$ passa da modulo $<1$ a $=1$ (tangente o perpendicolare alla bisettrice) a $>1$.

## Formule chiave
**Biforcazioni di codimensione 1** (figure della dispensa):
- **sella-nodo**: due punti fissi, uno stabile e uno instabile, nascono dal nulla;
- **transcritica**: $\dot u=(\mu-u)u$, due rami di punti fissi si scambiano la stabilità;
- **a forcone** supercritica $\dot u=(\mu-u^2)u$ e subcritica $\dot u=(\mu+u^2)u$;
- **di Hopf**: $\dot x=-y+x(\nu-(x^2+y^2))$, $\dot y=x+y(\nu-(x^2+y^2))$, nasce un ciclo limite.

**Mappa logistica.** In $\mu=1$ il punto 0 diventa instabile e nasce $\tilde x=1-\frac1\mu$ stabile (transcritica); in $\mu=3$ il punto fisso diventa repulsivo e nasce un'orbita di periodo 2, $x_{3,4}=\frac1{2\mu}\big[1+\mu\pm\sqrt{\mu^2-2\mu-3}\big]$, stabile per $\mu\in(3,1+\sqrt6)$ (**raddoppio del periodo**, a forcone). Seguono le orbite di periodo $2^n$ (tutte già viste a $\mu=3.57$) prima dell'orbita di periodo 3, che compare a $\mu=1+2\sqrt2=3.8284\dots$

## Intuizione
Al variare del parametro, un equilibrio perde stabilità quando $|F'|$ (o la parte reale di un autovalore) attraversa la soglia: la dinamica deve "riorganizzarsi" creando nuovi oggetti invarianti. La cascata di raddoppi del periodo è una strada classica verso il caos.

## Come si usa
Si trovano i punti fissi in funzione del parametro, si calcolano derivate o autovalori e si individuano i valori critici. Nel sistema di Lorenz: in $\rho=1$ l'origine perde stabilità ($\lambda_3=0$) e nascono due nuovi punti fissi; in $\rho_H=\frac{\sigma(\sigma+\beta+3)}{\sigma-\beta-1}$ avviene una biforcazione di Hopf. Vicino al punto critico la dinamica si riduce alla varietà centrale.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 12-18, 23-25).

## Prerequisiti
- [[Stabilità dei punti di equilibrio]]: il cambio di stabilità è il segnale della biforcazione
- [[Esponente di Lyapunov]]: cambia segno nel punto critico

## Porta a
- [[Caos deterministico]]: la cascata di raddoppi porta al caos
- [[Teorema della varietà centrale]]: riduzione della dinamica vicino alla biforcazione

## Collegati
- [[Equazione logistica discreta]]: esempio della cascata di raddoppi
- [[Sistema di Lorenz]]: biforcazione in $\rho=1$ e di Hopf in $\rho_H$
