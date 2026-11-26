---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["hypothesis test", "test di ipotesi", "verifica d'ipotesi", "ipotesi nulla", "null hypothesis", "ipotesi alternativa", "regione di rifiuto", "rejection region", "regione di accettazione", "errore di prima specie", "errore di seconda specie", "type I error", "type II error", "livello di significatività", "significance level"]
tags: [competenza, area/statistica]
---

# Test d'ipotesi

> Regola che, in base al campione, decide se rifiutare un'ipotesi $H_0$ su un parametro a favore di $H_1$, controllando la probabilità di rifiutarla quando è vera.

## Definizione / enunciato
Un'**ipotesi** è una dichiarazione su un parametro della popolazione. Un test confronta due ipotesi complementari, **nulla** $H_0:\theta\in\Theta_0$ e **alternativa** $H_1:\theta\in\Theta_0^c$; tipi classici: puntuale ($\theta=c$), unilaterale ($\theta<c$ o $\theta>c$), bilaterale ($\theta\ne c$). $H_0$ è ciò che l'esperimento vuole mostrare falso: si rifiuta solo con abbastanza evidenza.
Un **test** è una regola che decide per quali campioni si accetta $H_0$. La **regione di rifiuto** $R$ è dove si rifiuta $H_0$, il complementare è la **regione di accettazione** $A$; di solito $R=\{\mathbf X:T(\mathbf X)\in C\}$ con $T$ statistica.

## Formule chiave
| | accetto $H_0$ | accetto $H_1$ |
|---|---|---|
| $H_0$ vera | ok | errore di prima specie |
| $H_1$ vera | errore di seconda specie | ok |

Un test ha **livello** (dimensione) $\alpha$ se $\sup_{\theta\in\Theta_0}\beta(\theta)=\alpha$, con $\beta$ funzione potenza; $\alpha$ è il **livello di significatività** (valori standard 0.05, 0.1). Con statistiche discrete si ottiene in genere solo $\sup\beta(\theta)<\alpha$.

## Intuizione
Le stime sono v.a.: anche se $p_1=p_2$, $\hat p_1=\hat p_2$ ha probabilità quasi nulla. Il test chiede se con i dati disponibili si distingue la differenza. Diminuire l'errore di prima specie aumenta quello di seconda: non si minimizzano entrambi, quindi si fissa $\alpha$ e si ricava la regione.

## Come si usa
Brexit: $T=\sum X_i\sim\mathrm{Bin}(4772,p)$, $H_0:p=0.5$; regione $R=\{T\notin[2386-c,2386+c]\}$, con $c$ scelto per avere livello $\alpha$ ($c=68$ nell'esempio); si osserva $T=2290$. Esempi motivanti: sonniferi ($\bar x=-1.58$ su 10 pazienti), Michelson ($\bar x=852.4$ contro il vero 792.458), cinque esperimenti con medie diverse.

## Nei corsi
- **Prob e statistica** (triennale): slide "Test d'ipotesi e stime intervallari". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Introduzione I-III, I Test I-III, Costruzione del test I-IX); codice nel chunk "funzione potenza" del file R collegato (non presente fra gli script della cartella).

## Prerequisiti
- [[Campione casuale]]: la decisione dipende dal campione tramite una statistica

## Porta a
- [[Funzione potenza]]: probabilità di rifiuto in funzione di $\theta$
- [[Quantità pivotale]]: costruzione della regione di rifiuto
- [[p-value]]: alternativa alla risposta dicotomica
- [[Test del rapporto di verosimiglianza]]: regioni costruite in modo automatico
- [[Intervallo di confidenza]]: inversione di un test

## Collegati
- [[Distribuzione binomiale]]: statistica del test sulla Brexit
