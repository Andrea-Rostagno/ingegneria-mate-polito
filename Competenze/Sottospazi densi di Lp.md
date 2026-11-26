---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["dense subspaces of Lp", "densità delle funzioni semplici in Lp", "densità delle funzioni continue in Lp", "funzioni a scalino dense in Lp", "C_c(a,b)", "funzioni continue a supporto compatto", "separabilità di Lp"]
tags: [competenza, area/analisi]
---

# Sottospazi densi di Lp

> Per $p<\infty$ ogni funzione di $L^p$ si approssima in norma $p$ con funzioni semplici, funzioni a scalino o funzioni continue: è ciò che permette di dimostrare un risultato su una classe semplice ed estenderlo per densità.

## Definizione / enunciato
**Teor. 5.37.** Sia $p\in[1,\infty)$.
(i) Per ogni spazio di misura, $\operatorname{span}\{\mathbf 1_E:E\in\mathcal M,\ \mu(E)<\infty\}$ è denso in $L^p(M)$.
(ii) Se $\Omega\subseteq\mathbb R^n$ è aperto (misura di Lebesgue), $\operatorname{span}\{\mathbf 1_A:A\subseteq\Omega\text{ aperto},\ \lambda_n(A)<\infty\}$ è denso in $L^p(\Omega)$.
(iii) Se $I\subseteq\mathbb R$ è un intervallo, $\operatorname{span}\{\mathbf 1_{[c,d]}:[c,d]\subseteq I\}$ è denso in $L^p(I)$.
(iv) $C_c(a,b)=\{f\in C[a,b]:\operatorname{supp}f\subseteq(a,b)\}$, e quindi $C[a,b]$, sono densi in $L^p(a,b)$.
**Cor. 5.39.** $L^p(a,b)$ è separabile per ogni $p\in[1,\infty)$.

## Formule chiave
Lemma 5.36: per $[c,d]\subseteq(a,b)$, $\mathbf 1_{[c,d]}\in\overline{C_c(a,b)}^{\,L^p(a,b)}$; quindi $C_c(a,b)$ e $C[a,b]$ **non sono chiusi** in $L^p(a,b)$ per $p<\infty$.
Invece $C[a,b]$ è un sottospazio chiuso proprio di $L^\infty(a,b)$ (Prop. 5.33), e i risultati di densità **non valgono per $p=\infty$**.

## Intuizione
Il passo (i) viene dall'approssimazione delle funzioni misurabili non negative con funzioni semplici più la convergenza dominata in $L^p$; (ii) dalla regolarità della misura di Lebesgue (un boreliano si approssima dall'esterno con aperti); (iii) dal fatto che un aperto di $\mathbb R$ è unione al più numerabile di intervalli aperti disgiunti; (iv) approssimando ogni $\mathbf 1_{[c,d]}$ con funzioni continue $f_n\in C_c(a,b)$ (Lemma 5.36). In $L^\infty$ la norma è un sup e una funzione a salto non è approssimabile uniformemente da continue.

## Come si usa
Strategia "prima sui densi, poi per continuità": per definire un operatore limitato su $L^p$ basta definirlo su $C[a,b]$ o sulle funzioni a scalino e applicare l'estensione per continuità. La completezza delle basi trigonometriche in $L^2(0,\pi)$ usa che $C[0,\pi]$ è denso in $L^2(0,\pi)$; la separabilità segue combinando (iv) con Stone-Weierstrass.

## Nei corsi
- **Analisi funzionale** (triennale): §5.2 (Prop. 5.33, Lemma 5.36, Teor. 5.37, Cor. 5.39). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 57-60); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (pp. 9-10).
- **Equazioni alle derivate parziali** (triennale): densità di $C_c^\infty$ ottenuta per convoluzione con mollificatori: Teor. 4.2.3 ($\rho_k*f\to f$ in $L^p(\mathbb R^n)$, $1\le p<\infty$, partendo dalla densità di $C_c$) e Cor. 4.2.4 ($C_c^\infty(\Omega)$ denso in $L^p(\Omega)$, con estensione a zero e compatti invadenti). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 45-46).

## Prerequisiti
- [[Spazi Lp]]: ambiente della densità
- [[Funzione semplice]]: le combinazioni di indicatrici sono dense
- [[Aperti e chiusi in uno spazio metrico]]: nozione di sottoinsieme denso
- [[Teorema di convergenza dominata]]: versione in Lp usata nella prova di (i)

## Porta a
- [[Estensione per continuità]]: si definisce un operatore sui densi e si estende
- [[Lemma fondamentale del calcolo delle variazioni]]: la densità via mollificatori ne dà la versione $L^1_{\rm loc}$ (Equazioni alle derivate parziali)

## Collegati
- [[Teorema di Stone-Weierstrass]]: insieme danno la separabilità di Lp(a,b)
- [[Spazio separabile]]: Lp(a,b) separabile per p finito
- [[Misura di Lebesgue]]: regolarità usata in (ii)
- [[Mollificatori]]: densità di $C_c^\infty$ per convoluzione (Equazioni alle derivate parziali)
