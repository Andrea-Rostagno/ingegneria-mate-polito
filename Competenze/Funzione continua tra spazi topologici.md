---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["continuous map between topological spaces", "continuità topologica", "teorema sulla continuità", "controimmagine di aperti", "funzione aperta", "funzione chiusa", "open map", "closed map", "teorema di incollamento", "pasting lemma", "insieme di coincidenza chiuso"]
tags: [competenza, area/algebra-geometria]
---

# Funzione continua tra spazi topologici

> Una funzione è continua se le controimmagini degli aperti sono aperte: la definizione con intorni generalizza la $\epsilon$-$\delta$ e si può controllare su aperti, chiusi, chiusure o basi.

## Definizione / enunciato
$f:(X,\tau)\to(Y,\tau')$ è **continua in $p$** se per ogni $V\in\mathcal U_{f(p)}$ esiste $U\in\mathcal U_p$ con $f(U)\subseteq V$; è continua se lo è in ogni punto (Def. 3.1). Per spazi metrici coincide con la continuità rispetto a $d,d'$.

**Proposizione 3.3 (teorema sulla continuità).** Sono equivalenti:
1. $f$ è continua;
2. $A\in\tau'\Rightarrow f^{-1}(A)\in\tau$;
3. $C$ chiuso in $Y\Rightarrow f^{-1}(C)$ chiuso in $X$;
4. $f(\overline E)\subseteq\overline{f(E)}$ per ogni $E\subseteq X$.

**Teorema 3.8 (incollamento).** Se $X=X_1\cup X_2$ con $X_1,X_2$ entrambi aperti o entrambi chiusi, e $f_i:X_i\to Y$ sono continue con $f_1=f_2$ su $X_1\cap X_2$, la funzione $f$ uguale a $f_i$ su $X_i$ è continua.

**Teorema 3.10 (del grafico chiuso, versione topologica).** Se $f_1,f_2:X\to Y$ sono continue e $Y$ è di Hausdorff, l'insieme $\Gamma=\{p\in X\mid f_1(p)=f_2(p)\}$ è chiuso.

## Formule chiave
$$f^{-1}(Y\setminus E)=X\setminus f^{-1}(E),\qquad (g\circ f)^{-1}(A)=f^{-1}(g^{-1}(A)),\qquad (f|_E)^{-1}(A)=f^{-1}(A)\cap E.$$
Composte e restrizioni di funzioni continue sono continue (Prop. 3.7); basta verificare la continuità sugli elementi di una base (Prop. 3.5). $f$ è **aperta** (**chiusa**) se manda aperti in aperti (chiusi in chiusi), Def. 3.15; per l'apertura basta controllare una base (Prop. 3.16).

## Intuizione
Le tre nozioni continua, aperta e chiusa sono indipendenti: la proiezione $(x,y)\mapsto x$ è continua e aperta ma non chiusa (manda l'iperbole $xy=1$ in $\mathbb R\setminus\{0\}$), $x\mapsto x^2$ è continua e chiusa ma non aperta ($(-1,1)\mapsto[0,1)$) (Es. 3.17).

## Come si usa
- Nel teorema di incollamento l'ipotesi "entrambi aperti o entrambi chiusi" serve: $f=x-1$ su $(-\infty,0]$ e $x+1$ su $(0,+\infty)$ non è continua, $f^{-1}((-2,0))=(-1,0]$ (Es. 3.9).
- Grafico chiuso: se $f_1(p_0)\neq f_2(p_0)$ si separano $f_1(p_0)$ e $f_2(p_0)$ con aperti disgiunti $V_1,V_2$ e si prende $U=U_1\cap U_2$ con $f_i(U_i)\subseteq V_i$.
- Una funzione continua e suriettiva manda densi in densi (Cor. 3.4).
- Su $\mathbb R$ con la topologia delle semirette $[a,+\infty)$ le funzioni continue sono esattamente le crescenti (Es. 3.6(4)).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): punti 3 ("teorema sulla continuità") e 4 ("teorema del grafico chiuso") della lista delle dimostrazioni per l'orale. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§3.1, Def. 3.1, Prop. 3.3-3.7, Teor. 3.8, Teor. 3.10, Prop. 3.11, Def. 3.15, Es. 3.17, pp. 26-30); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§5.2, Teor. 5.19).

## Prerequisiti
- [[Spazio topologico]]: intorni, aperti e chiusi
- [[Chiusura e interno in uno spazio topologico]]: caratterizzazione con la chiusura
- [[Base di una topologia]]: verifica della continuità su una base

## Porta a
- [[Omeomorfismo]]: biiezione continua con inversa continua
- [[Spazio topologico compatto]]: l'immagine continua di un compatto è compatta
- [[Spazio connesso]]: l'immagine continua di un connesso è connessa
- [[Funzione compatibile con una relazione di equivalenza]]: continuità della funzione quoziente

## Collegati
- [[Funzione continua]]: caso delle funzioni reali di variabile reale
- [[Spazio di Hausdorff]]: ipotesi del teorema del grafico chiuso
- [[Teorema del grafico chiuso]]: omonimo dell'analisi funzionale, enunciato diverso
- [[Limiti e continuità in più variabili]]: caso di R^n con la topologia euclidea
