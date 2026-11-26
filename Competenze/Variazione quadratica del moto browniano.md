---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: [quadratic variation, "[W]_t = t", variazione quadratica, "(dW)^2 = dt"]
tags: [competenza, area/probabilita]
---

# Variazione quadratica del moto browniano

> La somma dei quadrati degli incrementi del moto browniano su $[a,b]$, al raffinarsi della partizione, converge a $b-a$: il browniano "accumula" varianza in modo deterministico.

## Definizione / enunciato
**Teorema.** Sia $(W_t)$ browniano unidimensionale, $0<a<b$, e $a=t_0^{(n)}<\dots<t_{q(n)}^{(n)}=b$ partizioni con passo $\ell_n=\max_j(t_j^{(n)}-t_{j-1}^{(n)})\to0$. Posto
$$Q_n=\sum_{j=1}^{q(n)}\big(W_{t_j^{(n)}}-W_{t_{j-1}^{(n)}}\big)^2,$$
si ha $\lim_n\mathbb E[(Q_n-(b-a))^2]=0$ (convergenza in $L^2$).

**Convergenza q.c.** Se inoltre $\sum_n\ell_n<\infty$ (ad esempio $t_j^{(n)}=j/2^n$), allora $Q_n\to b-a$ q.c.

Il limite in $L^2$ definisce la variazione quadratica: $[W]_t=t$ (`.tex`).

## Formule chiave
Con $X_j=(W_{t_j}-W_{t_{j-1}})^2-(t_j-t_{j-1})$: $\mathbb E[X_j]=0$ e, poiché il momento quarto di $N(0,s)$ è $3s^2$,
$$\mathbb E[X_j^2]=3(t_j-t_{j-1})^2-2(t_j-t_{j-1})^2+(t_j-t_{j-1})^2=2(t_j-t_{j-1})^2,$$
$$\mathbb E[(Q_n-(b-a))^2]=\sum_j\mathbb E[X_j^2]\le2\ell_n(b-a)\to0$$
(i termini misti si annullano per indipendenza degli incrementi). Per la versione q.c.: Markov dà $P(|Q_n-(b-a)|>\varepsilon)\le2(b-a)\ell_n/\varepsilon^2$, sommabile, e Borel-Cantelli conclude.

## Intuizione
Ogni incremento al quadrato ha media pari alla lunghezza dell'intervallo e fluttuazione dell'ordine del suo quadrato: sommando, le medie danno $b-a$ e le fluttuazioni spariscono. Per una traiettoria a variazione limitata e continua la stessa somma tenderebbe invece a $0$ (è il cuore della prova sulla variazione totale).

## Come si usa
È l'ingrediente per dimostrare che la [[Variazione totale del moto browniano]] è infinita, ed è il concetto chiave dell'analisi stocastica (calcolo di Itô). È l'analogo in tempo continuo della crescita $\mathbb E[W_n^2]=\mathbb E[W_0^2]+n$ data dal compensatore della passeggiata simmetrica.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 19 (insieme alla variazione totale). Fonti: `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Traiettorie.
- **Financial engineering** (magistrale): teo. c11-variazione-quadratica, $\sum_j(W_{t_{j+1}}-W_{t_j})^2\to t$ in $L^2$ (errore quadratico $\le2t\|\Pi\|$), scritta $\langle W\rangle_t=t$; le funzioni $C^1$ hanno variazione quadratica nulla (prop. c11-vq-regolari). Attenzione: è un limite per $\|\Pi\|\to0$, non un $\sup$ sulle partizioni (che sarebbe infinito q.c.). In forma differenziale $(dW_t)^2=dt$, $dt\,dW_t=0$, $(dt)^2=0$ (prop. c13-regole): base della formula di Itô. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap13.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 04 - analisi stocastica - 8 mag 26.pdf`.

## Prerequisiti
- [[Moto browniano]]: incrementi gaussiani indipendenti

## Porta a
- [[Variazione totale del moto browniano]]: variazione quadratica positiva implica totale infinita

## Collegati
- [[Incrementi ortogonali delle martingale]]: somma dei quadrati degli incrementi
- [[Formula di Itô]]: calcolo di Itô, il termine $\frac12f''dt$ viene da $(dW)^2=dt$ (corso Financial engineering)
- [[Integrale di Itô]]: le somme con punto destro e sinistro differiscono di $\sum(\Delta W)^2\to b-a$
- [[Processo di Itô]]: regole di moltiplicazione dei differenziali
