---
tipo: competenza
area: statistica
corsi: [Prova finale, Modelli statistici, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["Metropolis-Hastings algorithm", "Metropolis-Hastings", "MCMC", "Markov Chain Monte Carlo", "Monte Carlo a catena di Markov", "Gibbs sampling", "campionamento di Gibbs", "burn-in", "thinning", "probabilità di accettazione", "random walk Metropolis", "MCMC adattivo"]
tags: [competenza, area/statistica]
---

# Algoritmo di Metropolis-Hastings

> Metodo MCMC: si costruisce una catena di Markov con distribuzione stazionaria uguale al target $\pi(\theta)$ (tipicamente la posteriori) proponendo mosse e accettandole con una probabilità che usa solo rapporti di $\pi$, quindi senza costante di normalizzazione.

## Definizione / enunciato
**MCMC** (tesi §5.2.8): genera campioni da distribuzioni complesse costruendo una catena di Markov che ha il target $\pi(\theta)$ come distribuzione stazionaria; indipendentemente dal punto di partenza, dopo abbastanza iterazioni la catena converge al target. Due fasi per passo:
1. **proposta** $\theta^*\sim q(\theta^*\mid\theta)$ a partire dal valore corrente;
2. **accettazione** con probabilità
$$\alpha=\min\Big(1,\ \frac{\pi(\theta^*)\,q(\theta\mid\theta^*)}{\pi(\theta)\,q(\theta^*\mid\theta)}\Big),$$
altrimenti si ripete il valore corrente. Se $q$ è simmetrica, $q(\theta^*\mid\theta)=q(\theta\mid\theta^*)$, il rapporto si riduce a $\pi(\theta^*)/\pi(\theta)$.

## Formule chiave
- In scala logaritmica: si accetta se $\log U<\log\pi(\theta^*)-\log\pi(\theta)$, $U\sim\mathcal U(0,1)$.
- **Gibbs sampling**: si campiona ogni variabile condizionatamente alle altre; è un caso particolare di Metropolis-Hastings con accettazione sempre pari a 1.
- **Diagnosi**: *burn-in* (si scartano le prime iterazioni), *thin* (si tiene un campione ogni tanti per ridurre la dipendenza), autocorrelazione monitorata con l'ACF.

## Intuizione
La costante $f(y)$ della posteriori è un integrale intrattabile, ma nel rapporto di accettazione si semplifica: basta saper valutare $\pi$ a meno di una costante. La catena passa più tempo dove $\pi$ è grande, e le medie lungo la catena approssimano le medie rispetto a $\pi$.

## Come si usa
Implementazione della tesi per il $\rho$ della copula gaussiana (§5.2.9, `mcmc.py`): proposta uniforme $\theta^*=\rho+\mathcal U(-\delta,\delta)$, riflessa ai bordi $\pm0.999$; 4 catene da punti iniziali equispaziati fra $-0.8$ e $0.8$, 20000 iterazioni, burn-in 5000; ampiezza adattiva ogni 500 passi (×1.1 se l'accettazione supera il target 0.234, ×0.9 altrimenti, limitata a $[0.01,1]$) nel primo 60% delle iterazioni. Il rapporto usa solo la log-verosimiglianza della copula, cioè una prior piatta. Convergenza controllata con $\hat R$ di Gelman-Rubin. In `Stima Bayesiana.py` la proposta è invece normale con passo 0.05 e prior Beta. Per le cinque famiglie la tesi usa `pm.sample` di PyMC3 (2 catene, 2000 campioni, 1000 passi di tuning).

## Nei corsi
- **Prova finale** (triennale): §5.2.8 "MCMC" e §5.2.9 "Metodo MCMC in Python". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 56-61, 80-83); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/mcmc.py` (`improved_metropolis_hastings`); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Stima Bayesiana.py` (`metropolis_hastings`).
- **Modelli statistici** (magistrale): definizione di MCMC con $\pi(\theta\mid\text{dati})$ stazionaria e $\frac1N\sum g(\theta^{(t)})\to\mathbb E[g(\theta)\mid\text{dati}]$ (libro, cap. 4, Def. 4.6); burn-in e thinning (Def. 4.7). **Gibbs**: aggiornamento di una componente alla volta dalle condizionate complete; per $Y_i\mid\mu,\tau\sim N(\mu,1/\tau)$ con $\mu\sim N(m_0,1/t_0)$ e $\tau\sim\mathrm{Gamma}(a,b)$ si alternano $\mu\mid\tau,\mathbf y\sim N\bigl(\frac{t_0m_0+\tau\sum y_i}{t_0+n\tau},\frac1{t_0+n\tau}\bigr)$ e $\tau\mid\mu,\mathbf y\sim\mathrm{Gamma}\bigl(a+\frac n2,b+\frac12\sum(y_i-\mu)^2\bigr)$ (500 dati: media di $\mu$ 1.996, intervallo $(1.908;\ 2.083)$). **Metropolis** a passeggiata aleatoria per una posteriori Beta: tasso di accettazione 0.606, media 0.6595 contro il valore esatto 0.6591; la condizione di bilancio dettagliato è dimostrata; passo troppo piccolo o troppo grande dà catene molto autocorrelate. JAGS automatizza la costruzione del campionatore. Fonti: `Libri/Modelli statistici/capitoli/cap04.tex` (§4.3, pp. 61-64); `magistrale/Modelli statistici/codici/251009 Jags.R`.
- **Statistica computazionale** (magistrale): **Metropolis dentro il Gibbs**: all'iterazione $b$, passo $h$, invece di campionare dalla full conditional (quando non ha forma nota, es. $\sigma^2\sim G(a,b)$ in una regressione) si usa un meccanismo accept-reject. Si propone $\theta_h^*\sim q(\cdot\mid\boldsymbol\theta^b_{1:(h-1)},\boldsymbol\theta^{b-1}_{h:p},\mathbf y)$ e si accetta con $\alpha=\min\Bigl\{\frac{f(\theta_h^*\mid\boldsymbol\theta^b_{1:(h-1)},\boldsymbol\theta^{b-1}_{(h+1):p},\mathbf y)\,q(\theta_h^{b-1}\mid\dots,\theta_h^*,\dots)}{f(\theta_h^{b-1}\mid\boldsymbol\theta^b_{1:(h-1)},\boldsymbol\theta^{b-1}_{(h+1):p},\mathbf y)\,q(\theta_h^*\mid\dots,\theta_h^{b-1},\dots)},1\Bigr\}$, altrimenti $\theta_h^b=\theta_h^{b-1}$. Note delle slide: serve solo calcolare la densità della full conditional, la costante si semplifica, una proposta simmetrica centrata nel valore precedente scompare dal rapporto, se la proposta è la full conditional $\alpha=1$ (il campionamento diretto è un Metropolis); al posto della full conditional si può mettere il numeratore della posteriori $f(\mathbf y\mid\sigma^2,\boldsymbol\beta)f(\sigma^2,\boldsymbol\beta)$ senza cambiare $\alpha$. Si preferisce lavorare su $\mathbb R$ (es. $\tau^2=\log\sigma^2$ con proposta normale, ricavando la nuova densità con la trasformazione di variabili). Dimostrazione che il passo rispetta il bilancio dettagliato. Diagnostica: traceplot, burn-in, thin e ACF. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 15-33).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: la catena costruita
- [[Distribuzione stazionaria di una DTMC]]: il target è la stazionaria
- [[Stima bayesiana]]: distribuzione a posteriori da campionare

## Porta a
- [[Diagnostica di Gelman-Rubin]]: convergenza di più catene
- [[Dimensione campionaria effettiva]]: informazione contenuta in una catena autocorrelata (Modelli statistici)
- [[Linguaggio JAGS]]: campionatore di Gibbs costruito dal modello (Modelli statistici)
- [[Metropolis adattivo]]: regolazione automatica della varianza della proposta (Statistica computazionale)
- [[Hamiltonian Monte Carlo]]: proposta costruita con la dinamica hamiltoniana (Statistica computazionale)

## Collegati
- [[Teorema ergodico per DTMC]]: giustifica le medie lungo la catena
- [[Bilancio dettagliato]]: costruzione di catene reversibili
- [[Gibbs sampler]]: il passo Metropolis sostituisce una full conditional non campionabile (Statistica computazionale)
- [[Full conditional]]: target del singolo passo (Statistica computazionale)
- [[Metodo accept-reject]]: idea di proposta più accettazione (Statistica computazionale)
- [[Metodo Monte Carlo]]: stima per media di campioni, qui non indipendenti
- [[Formula di Bayes]]: il target è la posteriori $\propto f(y\mid\theta)f(\theta)$; la costante $f(y)$ si semplifica nel rapporto di accettazione
