---
tipo: competenza
area: probabilita
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Galton-Watson branching process", "branching process", "processo di ramificazione", "processo di diramazione", "probabilità di estinzione", "extinction probability", "regime subcritico critico supercritico", "percolated branching process", "percolazione di un processo di ramificazione"]
tags: [competenza, area/probabilita]
---

# Processo di Galton-Watson

> Ogni individuo genera un numero aleatorio i.i.d. di figli; la popolazione si estingue con probabilità pari al più piccolo punto fisso in $[0,1]$ della funzione generatrice della prole, e sopravvive con probabilità positiva se e solo se la media dei figli supera 1.

## Definizione / enunciato
$\{\xi^t_i\}$ i.i.d. con $\mathbb P(\xi^t_i=k)=p_k$; $X_t$ = taglia della generazione $t$:
$$X_0=1,\qquad X_{t+1}=\sum_{i=1}^{X_t}\xi^t_i .$$
$X_t=0\Rightarrow X_u=0$ per $u\ge t$. Tempo di estinzione $T_{\mathrm{ext}}=\inf\{t:X_t=0\}$; $\theta_{\mathrm{ext}}=\mathbb P(T_{\mathrm{ext}}<+\infty)$.
Funzione generatrice $\Phi(x)=\sum_{k\ge0}p_kx^k$: $C^\infty$, convessa, non decrescente su $[0,1]$, $\Phi(0)=p_0$, $\Phi(1)=1$, $\Phi'(1)=\mu=\sum_kkp_k$.

**Lemma.** $\theta_{\mathrm{ext}}=\min\{\theta\in[0,1]:\Phi(\theta)=\theta\}$.
**Teorema.** subcritico $\mu<1\Rightarrow\theta_{\mathrm{ext}}=1$; critico $\mu=1$, $p_1<1\Rightarrow\theta_{\mathrm{ext}}=1$ ($p_1=1\Rightarrow\theta_{\mathrm{ext}}=0$); supercritico $\mu>1\Rightarrow\theta_{\mathrm{ext}}<1$.

## Formule chiave
Prova del lemma: $\theta_t=\mathbb P(X_t=0)$ è crescente con $\theta_0=0$ e, condizionando sui figli della radice, $\theta_{t+1}=\sum_kp_k\theta_t^k=\Phi(\theta_t)$; per continuità il limite è punto fisso, per monotonia il più piccolo.
- **Poisson($\lambda$):** $\Phi(\theta)=e^{(\theta-1)\lambda}$; $\lambda\le1$ estinzione certa; $\lambda>1$ sopravvivenza $=$ unico $x\in(0,1)$ con $e^{-\lambda x}=1-x$.
- **Binomiale($n,\gamma$):** $\Phi(\theta)=(1-(1-\theta)\gamma)^n$; $n\gamma>1$: sopravvivenza = unico $x\in(0,1)$ con $(1-\gamma x)^n=1-x$.
- **Percolazione:** tenendo ogni nodo (tranne la radice) con probabilità $\gamma$, la prole diventa $p^{(\gamma)}_k=\sum_{l\ge k}p_l\binom lk\gamma^k(1-\gamma)^{l-k}$, con media $\mu\gamma$: sopravvive se e solo se $\mu\gamma>1$. Poisson($\lambda$) diventa Poisson($\lambda\gamma$), Binom($n,\alpha$) diventa Binom($n,\alpha\gamma$).

## Intuizione
Se in media ogni individuo si sostituisce con meno di uno, la popolazione si esaurisce; sopra 1 può esplodere, ma resta sempre una probabilità positiva di estinzione precoce ($p_0>0$).

## Come si usa
Strumento chiave per i grafi aleatori: esplorando il vicinato di un nodo in un Erdős-Rényi o in un modello di configurazione si ottiene approssimativamente un albero di Galton-Watson, e la componente gigante esiste se e solo se il processo è supercritico.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "The Galton-Watson branching process", "Extinction probability in GW branching process", esempi 1-3. Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 4-13).

## Prerequisiti
- [[Distribuzione di Poisson]]: esempio principale di legge della prole

## Porta a
- [[Componente gigante]]: soglia di esistenza via sopravvivenza del processo
- [[Modello di configurazione]]: processo a due stadi

## Collegati
- [[Distribuzione binomiale]]: altro esempio di prole
- [[Metodo del punto fisso]]: $\theta_{t+1}=\Phi(\theta_t)$ è un'iterazione di punto fisso
