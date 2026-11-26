---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Lyapunov exponent", "esponente di Ljapunov", "esponenti di Lyapunov", "tasso di dispersione locale", "local dispersion rate", "sensibilità alle condizioni iniziali", "effetto farfalla", "butterfly effect", "orbita superstabile"]
tags: [competenza, area/analisi]
---

# Esponente di Lyapunov

> Tasso esponenziale con cui traiettorie inizialmente vicine si separano (esponente positivo, caos) o si avvicinano (esponente negativo, stabilità); il suo inverso è l'orizzonte di prevedibilità.

## Definizione / enunciato
Nei sistemi caotici le differenze iniziali crescono esponenzialmente nel tempo; il tasso di separazione si chiama **esponente di Lyapunov**, ha le dimensioni dell'inverso di un tempo: per gli oggetti astronomici è piccolissimo (previsioni a lunghissimo termine), per l'atmosfera corrisponde a circa una settimana. Il **tasso di dispersione locale** è $u(x)=\sum_i\chi_i(x)$: i $\chi_i(x)$ sono locali e possono avere segno diverso dagli esponenti globali $\lambda_i(x)$.

Per una mappa $F$ in una dimensione vicino a un punto fisso $x^*$, con $d_n=|x_n-x^*|$:
$$d_n\simeq\mu^nd_0=e^{n\ln\mu}d_0,\qquad\lambda=\ln|F'(x^*)| .$$

## Formule chiave
- $\lambda<0$: orbita stabile; $\lambda>0$: orbita instabile; $(F^n)'=0$: orbita **superstabile** (formalmente $\lambda=-\infty$).
- Orbita periodica di periodo $n$, $x_1,\dots,x_n$: $\frac{d F^n}{dx}(x_1)=F'(x_n)F'(x_{n-1})\cdots F'(x_1)=\prod_iF'(x_i)$, indipendente dal punto scelto.
- Esempio: per la mappa logistica con $\mu<1$, $x^*=0$, $d_n<\mu^nd_0$ e $\lambda=\ln F'(0)=\ln\mu<0$; la mappa dei massimi di $z$ del sistema di Lorenz è circa $\eta_{n+1}=2\eta_n\bmod1$, con $\lambda=\ln2$.

## Intuizione
Il modulo della derivata dà il fattore con cui le distanze si contraggono o si dilatano a ogni passo; il logaritmo lo trasforma in un tasso. Se $\lambda>0$, un errore iniziale $\delta$ diventa $\delta e^{\lambda n}$: con precisione finita la previsione si perde dopo un tempo dell'ordine di $\frac1\lambda\ln\frac1\delta$ (stima nostra, coerente con la lettura "inverso di un tempo" della dispensa).

## Come si usa
Si calcola la derivata nel punto fisso o il prodotto delle derivate lungo l'orbita periodica e se ne prende il log del modulo: è il criterio $|F'|<1$ di attrattività riformulato. Nei punti iperbolici gli esponenti non nulli definiscono le direzioni stabili e instabili.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 1-2, 14-17, 26).

## Prerequisiti
- [[Flusso di un sistema dinamico]]: separazione delle traiettorie del flusso
- [[Stabilità dei punti di equilibrio]]: criterio $|f'(x^*)|<1$

## Porta a
- [[Caos deterministico]]: esponente positivo e imprevedibilità
- [[Insieme iperbolico]]: esponenti non nulli ordinati
- [[Biforcazione]]: cambio di segno dell'esponente al variare del parametro

## Collegati
- [[Stabilità secondo Lyapunov]]: nozione di stabilità dello stesso autore
- [[Equazione logistica discreta]]: esempio di calcolo
